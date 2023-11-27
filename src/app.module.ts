import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './modules/mail/mail.module';
import { DatabaseModule } from './modules/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseInitService } from './modules/database/databaseInit.service';
import { AuthModule } from './modules/auth/auth.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PasswordResetsModule } from './modules/password-resets/password-resets.module';

@Module({
  imports: [
    MailModule,
    DatabaseModule,
    UsersModule,
    AuthModule,
    ProjectsModule,
    PasswordResetsModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseInitService],
})
export class AppModule {}
