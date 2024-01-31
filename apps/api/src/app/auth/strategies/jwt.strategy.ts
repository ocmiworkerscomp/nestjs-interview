import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '@spikey/api/app/users/users.service';
import { ConfigService } from '@nestjs/config';
import { error } from '@spikey/shared/responses';
import { StatusCodes } from 'http-status-codes';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    configService: ConfigService,
    private usersService: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('auth.jtwSecret'),
      ignoreExpiration: false
    });
  }

  async validate(payload: { userId: number }) {
    const user = this.usersService.user(payload.userId);

    if (!user) {
      error(StatusCodes.FORBIDDEN, 'Forbidden');
    }

    return user;
  }
}
