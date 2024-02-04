import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getHelloWorld', () => {
    it('should return "Hello World"', () => {
      expect(service.helloWorld()).toEqual({ message: 'Hello World' });
    });
  });
});
