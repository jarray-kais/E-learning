import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { signupDto } from './dto/user.dto';
import { loginDto } from './dto/login.dto';
import { forgotPasswordDto } from './dto/forgot.dto';
import { resetPasswordDto } from './dto/resetPasswordDto.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('signup')
  async signup(@Body() signupData: signupDto) {
    return this.usersService.signup(signupData);
  }

  @Post('login')
  async login(@Body() loginData: loginDto) {
    return this.usersService.validateAndLogin(
      loginData.email,
      loginData.password,
    );
  }

  @Post('forgot-password')
  forgotPassword(@Body() forgotPassworddto: forgotPasswordDto) {
    return this.usersService.forgotPassword(forgotPassworddto.email);
  }

  @Put('/reset-password/:token')
  async resetPassword(
    @Param('token') token: string,
    @Body() resetPasswordDto: resetPasswordDto,
  ) {
    return this.usersService.resetPassword(token, resetPasswordDto.newPassword);
  }
}
