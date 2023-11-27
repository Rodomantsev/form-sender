import {
  Body,
  Controller,
  Get,
  Injectable,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateProjectDto } from './dto/createProject.dto';
import { IProject } from './interfaces/project.interface';
import { MailService } from '../mail/mail.service';

export abstract class IProjectsMediator {
  abstract createProject(createProjectDto: CreateProjectDto): Promise<IProject>;
  abstract getProjectsByUserId(id: number): Promise<IProject[]>;
}

@Injectable()
export class ProjectsMediator implements IProjectsMediator {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly mailService: MailService,
  ) {}

  async createProject(createProjectDto: CreateProjectDto): Promise<IProject> {
    const project = await this.projectsService.createProject(createProjectDto);

    await this.mailService.sendMail({
      to: 'rodomantsev@gmail.com', // user.email !!
      from: '"Support Team" <support@example.com>',
      subject:
        'Поздравляем с успешным созданием вашего проекта "[Название проекта]"!',
      template: './created-project',
    });

    return project;
  }

  async getProjectsByUserId(id: number): Promise<IProject[]> {
    return this.projectsService.getProjectsByUserId(id);
  }
}
