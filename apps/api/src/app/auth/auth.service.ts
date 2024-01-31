import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from '@spikey/api/app/auth/entity/auth.entity';
import { UsersService } from '@spikey/api/app/users/users.service';
import { HashService } from '@spikey/api/app/auth/hash.service';
import { error } from '@spikey/shared/responses';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private hashService: HashService
  ) {
  }

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.userService.findByEmail(email);

    if (!user || !(user?.password && this.hashService.compare(password, user.password))) {
      error(StatusCodes.UNPROCESSABLE_ENTITY, { email: 'The provided credentials are incorrect.' });
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
      ..._.omit(user, ['password'])
    };
  }
}
