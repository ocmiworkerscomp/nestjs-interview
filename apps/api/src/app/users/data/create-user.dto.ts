import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;

  @IsString()
  @MaxLength(10)
  @MinLength(10)
  @ApiProperty()
  phone: string;

  @IsBoolean()
  @ApiProperty()
  isVerified: boolean;


  @IsEnum(Role)
  @ApiProperty()
  role: Role;
}
