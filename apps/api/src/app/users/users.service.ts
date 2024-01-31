import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './data/create-user.dto';
import { UpdateUserDto } from './data/update-user.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserCreatedEvent } from '@spikey/api/app/users/events/user-created.event';
import { type ExtendedPrismaClient } from '@spikey/api/prisma/extended-prisma-client';
import { CustomPrismaService } from 'nestjs-prisma';
import { HashService } from '@spikey/api/app/auth/hash.service';
import { UserType } from '@spikey/shared/types';
import { getPermissions } from '@spikey/shared/permissions';
import { StatusCodes } from 'http-status-codes';
import { error } from '@spikey/shared/responses';

@Injectable()
export class UsersService {
  constructor(
    @Inject('PrismaService')
    private prisma: CustomPrismaService<ExtendedPrismaClient>,
    private eventEmitter: EventEmitter2,
    private hashService: HashService
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    if (await this.findByEmail(createUserDto.email)) {
      error(StatusCodes.UNPROCESSABLE_ENTITY, 'The user with this email already exists');
    }

    createUserDto.password = this.hashService.hash(createUserDto.password);

    const user = await this.prisma.client.user.create({
      data: createUserDto
    });

    this.eventEmitter.emit('user.created', new UserCreatedEvent(user));

    return user;
  }

  findAll() {
    return this.prisma.client.user.findMany();
  }

  paginate() {
    return this.prisma.client.user.paginate();
  }

  findOne(id: number) {
    return this.prisma.client.user.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return this.prisma.client.user.findUnique({ where: { email } });
  }

  async user(id: number) {
    const user = await this.prisma.client.user.findUnique({ where: { id } });

    const _user: UserType = {
      ...user,
      permissions: getPermissions(user.role)
    };


    return _user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = this.hashService.hash(updateUserDto.password);
    }
    return this.prisma.client.user.update({
      where: { id },
      data: updateUserDto
    });
  }

  remove(id: number) {
    return this.prisma.client.user.delete({ where: { id } });
  }
}
