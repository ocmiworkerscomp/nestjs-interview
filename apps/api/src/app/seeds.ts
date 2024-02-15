import { EntityManager } from 'typeorm';
import { User } from '../user/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeederService {
  constructor(private readonly entityManager: EntityManager) {}

  async seed() {
    const usersData = [
      { username: 'usuario1', password: 'contraseña1', isAdmin: false },
      { username: 'admin1', password: 'contraseña2', isAdmin: true },
    ];

    for (const userData of usersData) {
      const user = this.entityManager.create(User, userData);
      await this.entityManager.save(user);
    }
  }
}
