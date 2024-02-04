import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  helloWorld(): { message: string } {
    return { message: 'Hello World' };
  }
}
