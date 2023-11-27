import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { DatabaseModule } from '../database/database.module';
import { ProjectsMediator } from './projects.mediator';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [DatabaseModule, MailModule],
  providers: [ProjectsService, ProjectsMediator],
  controllers: [ProjectsController],
})
export class ProjectsModule {}
