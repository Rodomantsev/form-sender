import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(private databaseService: DatabaseService) {}

  async createUser(createUserDto: CreateUserDto): Promise<IUser[]> {
    const { username, email, password, role } = createUserDto;
    return await this.databaseService.query<IUser>(
      'INSERT INTO users(username, email, password, role) VALUES($1, $2, $3, $4)',
      [username, email, password, role],
    );
  }

  async findOne(email: string): Promise<IUser> {
    const users = await this.databaseService.query<IUser>(
      'SELECT * FROM users WHERE email = $1',
      [email],
    );
    return users[0];
  }

  async findAll(): Promise<IUser[]> {
    return await this.databaseService.query<IUser>('SELECT * FROM users');
  }
}
