import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomPrismaModule } from 'nestjs-prisma';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import registerConfig from '@spikey/api/config';
import { OpenApiCommand } from '@spikey/api/commands/open-api.command';
import { RouteListCommand } from '@spikey/api/commands/route-list.command';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ExtendedPrismaService } from '@spikey/api/prisma/extended-prisma.service';
import { PrismaSeedCommand } from '@spikey/api/commands/prisma-seed.command';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      global: true
    }),
    ConfigModule.forRoot({
      envFilePath: '../../.env',
      isGlobal: true,
      load: [...registerConfig()]
    }),
    CustomPrismaModule.forRootAsync({
      name: 'PrismaService',
      useClass: ExtendedPrismaService,
      isGlobal: true
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, OpenApiCommand, RouteListCommand, PrismaSeedCommand]
})
export class AppModule {
}
