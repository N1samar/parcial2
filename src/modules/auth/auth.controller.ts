import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { ILoginResponse } from './interfaces/login.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() loginDto: LoginDto): Promise<ILoginResponse> {
    return this.authService.login(loginDto);
  }
}
