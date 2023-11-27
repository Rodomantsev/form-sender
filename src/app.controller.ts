import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { MailService } from './modules/mail/mail.service';
import { DatabaseService } from './modules/database/database.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Post()
  async postHello(@Req() request: Request): Promise<any> {
    console.log('req', JSON.stringify(request.body));
    return `form data ${JSON.stringify(request.body)}`;
  }
}
