import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '@spikey/api/app/users/entities/user.entity';

export class AuthEntity extends UserEntity {
  @ApiProperty()
  accessToken: string;
}
