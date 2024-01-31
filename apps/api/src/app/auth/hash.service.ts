import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  constructor(private configService: ConfigService) {
  }

  hash(password: string) {
    return bcrypt.hashSync(
      password,
      this.configService.get('auth.roundsOfHashing')
    );
  }

  compare(password: string, hashedPassword: string) {
    return bcrypt.compareSync(password, hashedPassword);
  }
}
