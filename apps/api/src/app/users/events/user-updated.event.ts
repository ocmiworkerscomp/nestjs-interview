import type { User } from '@prisma/client';

export class UserCreatedEvent {
  constructor(public readonly user: User) {}
}
