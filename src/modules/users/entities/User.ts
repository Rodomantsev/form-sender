import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
  id: number;
  username: string;
  password: string;
  email: string;
  role: string; // enum
  created_at: Date;
  updated_at: Date;

  constructor(private readonly user: IUser) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.role = user.role;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}
