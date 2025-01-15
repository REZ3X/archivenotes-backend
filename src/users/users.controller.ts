import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: any): Promise<User> {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: any) {
    return this.authService.login(loginUserDto);
  }
}