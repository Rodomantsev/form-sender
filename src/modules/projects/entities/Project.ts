import { IProject } from '../interfaces/project.interface';

export class Project implements IProject {
  id: number;
  user_id: number;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(private readonly project: IProject) {
    this.id = project.id;
    this.user_id = project.user_id;
    this.email = project.email;
    this.created_at = project.created_at;
    this.updated_at = project.updated_at;
  }
}
