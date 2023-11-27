import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../database/database.module';
import { UsersMediator } from './users.mediator';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [DatabaseModule, MailModule],
  providers: [UsersMediator, UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
