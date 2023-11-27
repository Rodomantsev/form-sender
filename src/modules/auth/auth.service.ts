import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import { IUser } from '../users/interfaces/user.interface';
import { randomBytes } from 'crypto';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<{ access_token: string }> {
    const { email, password } = loginUserDto;
    const user: IUser = await this.usersService.findOne(email);
    if (!user || user?.password !== password) {
      throw new UnauthorizedException();
    }
    return {
      access_token: await this.jwtService.signAsync({
        sub: user.id,
        email: user.email,
      }),
    };
  }

  async forgotPassword(email: string): Promise<any> {
    const user: IUser = await this.usersService.findOne(email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const dayMS = 3600000;
    const token = randomBytes(20).toString('hex');
    const expiry = new Date(Date.now() + dayMS); // Токен действителен 1 час

  }

  async generateResetToken() {


    // генерация токена
  }
}
