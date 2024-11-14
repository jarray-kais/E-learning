import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schemas';
import { Model } from 'mongoose';
import { signupDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { EmailService } from './services/mail.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
    private jwtService: JwtService,
    private emailService: EmailService,
  ) {}

  async signup(signupData: signupDto) {
    console.log(signupData);
    //check if email in user
    const existEmail = await this.UserModel.findOne({
      email: signupData.email,
    });
    if (existEmail) {
      throw new BadRequestException('Email already exists');
    }
    const hashPAssword = await bcrypt.hash(signupData.password, 10);
    const user = new this.UserModel({
      name: signupData.name,
      email: signupData.email,
      password: hashPAssword,
    });
    return {
      message: 'User registered successfully',
      status: 'success',
      user: await user.save(),
    };
  }

  async validateAndLogin(email: string, password: string) {
    const user = await this.UserModel.findOne({ email });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials password');
    }
    console.log('Credentials are valid');
    const payload = { email: user.email, _id: user._id, name: user.name };
    const access_token = this.jwtService.sign(payload);
    return {
      status: 'success',
      _id: String(user._id),
      name: user.name,
      email: user.email,
      access_token,
    };
  }

  getBaseUrl() {
    return (
      process.env.BASE_URL ||
      (process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://e-learning-platforme-r1ho6mlnk-jarray-kais-projects.vercel.app/')
    );
  }
  async forgotPassword(
    email: string,
  ): Promise<{ message: string; status: string }> {
    const user = await this.UserModel.findOne({ email });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const token = this.jwtService.sign(
      { _id: user._id },
      { secret: process.env.JWT_SECRET, expiresIn: '1h' },
    );
    // Save the token in the user record
    await this.UserModel.updateOne(
      { _id: user._id },
      { $set: { resetToken: token } },
      { strict: false },
    );
    const resetUrl = `${this.getBaseUrl()}/reset-password/${token}`;
    const emailContent = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #007BFF;">Password Reset Request</h2>
    <p style="font-size: 16px; line-height: 1.5;">
      Hello,
    </p>
    <p style="font-size: 16px; line-height: 1.5;">
      Please click the link below to reset your password. This link will expire in 1 hour.
    </p>
    <a href="${resetUrl}" 
       style="display: inline-block; padding: 10px 20px; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px; font-size: 16px;">
       Reset Password
    </a>
    <p style="margin-top: 20px; font-size: 12px; color: #555;">
      If you did not request this, please ignore this email.
    </p>
  </div>
`;
    //send email with password reset url
    await this.emailService.sendMail(
      user.email,
      'Resert Password',
      emailContent,
    );
    return {
      message: 'We have sent a password reset link to your email.',
      status: 'success',
    };
  }

  async resetPassword(token: string, newPassword: string) {
    console.log(newPassword);
    console.log(token);
    let decodedToken;
    try {
      decodedToken = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
    const user = await this.UserModel.findOneAndUpdate(
      { resetToken: token },
      {
        $set: {
          password: await bcrypt.hash(newPassword, 10),
          resetToken: '',
        },
      },
      { new: true },
    );
    if (!user) {
      throw new BadRequestException('Invalid token or expired token');
    }
    return {
      message: 'Password reset successfully',
      status: 'success',
    };
  }
}
