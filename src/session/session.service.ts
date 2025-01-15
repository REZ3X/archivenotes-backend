import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
  ) {}

  async createSession(userId: number, sessionToken: string): Promise<Session> {
    const session = this.sessionRepository.create({ user: { id: userId }, session_token: sessionToken });
    return this.sessionRepository.save(session);
  }

  async findSessionByToken(sessionToken: string): Promise<Session | undefined> {
    return this.sessionRepository.findOne({ where: { session_token: sessionToken } });
  }

  async deleteSession(sessionToken: string): Promise<void> {
    await this.sessionRepository.delete({ session_token: sessionToken });
  }
}