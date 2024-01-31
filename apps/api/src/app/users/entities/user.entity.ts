import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export type UserWithoutPassword = Omit<User, 'password'>

export class UserEntity implements UserWithoutPassword {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  isVerified: boolean;

  @ApiProperty({
    example: Role.USER
  })
  role: Role;

  @Exclude()
  password?: string;
}
