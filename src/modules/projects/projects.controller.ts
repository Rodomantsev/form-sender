import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { CreateProjectDto } from './dto/createProject.dto';
import { IProjectsMediator, ProjectsMediator } from './projects.mediator';
import { IProject } from './interfaces/project.interface';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsMediator: ProjectsMediator) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createProjectDto: CreateProjectDto): Promise<IProject> {
    return this.projectsMediator.createProject(createProjectDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async getProjectsByUserId(@Param('id') id: number): Promise<IProject[]> {
    return this.projectsMediator.getProjectsByUserId(id);
  }
}
