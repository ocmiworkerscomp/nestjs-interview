import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { HelloCommand } from '@ocmi/api/commands/hello.command';
// import { PrismaModule } from 'nestjs-prisma';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [join(__dirname, 'user', 'user.entity.js')],
      synchronize: true,
    }),
    // PrismaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // HelloCommand
  ],
})
export class AppModule {}
