import { Injectable } from '@nestjs/common';
import { UserCreatedEvent } from '@spikey/api/app/users/events/user-created.event';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UserCreatedListener {
  @OnEvent('user.created')
  handle(event: UserCreatedEvent) {
    console.log(event);
  }
}
