import { Module } from '@nestjs/common';
import { PasswordResetsService } from './password-resets.service';
import { PasswordResetsController } from './password-resets.controller';

@Module({
  providers: [PasswordResetsService],
  controllers: [PasswordResetsController]
})
export class PasswordResetsModule {}
