import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './notes.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  findAll() {
    return this.notesRepository.find();
  }

  create(createNoteDto: any) {
    return this.notesRepository.save(createNoteDto);
  }

  update(id: string, updateNoteDto: any) {
    return this.notesRepository.update(id, updateNoteDto);
  }

  remove(id: string) {
    return this.notesRepository.delete(id);
  }
}