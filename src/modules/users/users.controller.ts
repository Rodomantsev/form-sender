import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import { IUsersMediator, UsersMediator } from './users.mediator';

@Controller('users')
export class UsersController {
  constructor(private usersMediator: UsersMediator) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<IUser[]> {
    return await this.usersMediator.register(createUserDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  async getAllUsers(): Promise<IUser[]> {
    return await this.usersMediator.getAllUsers();
  }
}
