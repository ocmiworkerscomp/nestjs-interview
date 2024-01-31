import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserCreatedListener } from '@spikey/api/app/users/listeners/user-created.listener';
import { HashService } from '@spikey/api/app/auth/hash.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserCreatedListener, HashService],
  exports: [UsersService]
})
export class UsersModule {
}
