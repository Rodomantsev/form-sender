import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(sendEmailDto: SendEmailDto, context: any = {}) {
    return await this.mailerService.sendMail({
      to: sendEmailDto.to,
      from: sendEmailDto.from,
      subject: sendEmailDto.subject,
      template: sendEmailDto.template,
      context,
    });
  }
}
