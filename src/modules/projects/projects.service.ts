import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProjectDto } from './dto/createProject.dto';
import { IProject } from './interfaces/project.interface';

@Injectable()
export class ProjectsService {
  constructor(private databaseService: DatabaseService) {}

  async createProject(createProjectDto: CreateProjectDto): Promise<IProject> {
    const { userId, email } = createProjectDto;
    const project = await this.databaseService.query<IProject>(
      `INSERT INTO projects (user_id, email) VALUES ($1, $2) RETURNING *`,
      [userId, email],
    );
    return project[0];
  }

  async getProjectsByUserId(projectId: number): Promise<IProject[]> {
    return await this.databaseService.query<IProject>(
      `SELECT * FROM projects WHERE user_id = $1`,
      [projectId],
    );
  }
}

interface IProjectsService {
  createProject(): Promise<any>;
  getProjectsByUserId(): Promise<any>;
}
