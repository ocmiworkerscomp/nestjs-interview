import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@spikey/api/app/auth/strategies/jwt.strategy';
import { UsersModule } from '@spikey/api/app/users/users.module';
import { ConfigService } from '@nestjs/config';
import { HashService } from '@spikey/api/app/auth/hash.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('auth.jtwSecret'),
          signOptions: {
            expiresIn: '5m'
          }
        };
      },
      inject: [ConfigService]
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, HashService],
  exports: [HashService]
})
export class AuthModule {
}
