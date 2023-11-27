import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import { MailService } from '../mail/mail.service';

export interface IUsersMediator {
  register(createUserDto: CreateUserDto): Promise<IUser[]>;
  getAllUsers(): Promise<IUser[]>;
}

@Injectable()
export class UsersMediator implements IUsersMediator {
  constructor(
    private userService: UsersService,
    private mailService: MailService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<IUser[]> {
    try {
      const user = await this.userService.createUser(createUserDto);

      await this.mailService.sendMail({
        to: 'rodomantsev@gmail.com', // user.email !!
        from: '"Support Team" <support@example.com>',
        subject: 'Добро пожаловать в [Название Сервиса]!',
        template: './welcome',
      });

      return user;
    } catch (error) {
      throw new HttpException('Ошибка при регистрации', HttpStatus.BAD_REQUEST);
    }
  }

  async getAllUsers(): Promise<IUser[]> {
    try {
      return await this.userService.findAll();
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}
