import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class loginDto {
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*\d)/, {
    message: 'Password must contain at least one number',
  })
  password: string;
}
