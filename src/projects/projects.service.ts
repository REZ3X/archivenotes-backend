import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './projects.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  findAll() {
    return this.projectsRepository.find();
  }

  create(createProjectDto: any) {
    return this.projectsRepository.save(createProjectDto);
  }

  update(id: string, updateProjectDto: any) {
    return this.projectsRepository.update(id, updateProjectDto);
  }

  remove(id: string) {
    return this.projectsRepository.delete(id);
  }
}