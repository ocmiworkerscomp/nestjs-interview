import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './data/create-user.dto';
import { UpdateUserDto } from './data/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from '@spikey/api/app/auth/guards/jwt-auth.guard';
import { HasPermission } from '@spikey/api/decorators/has-permission.decorator';
import { HasPermissionGuard } from '@spikey/api/guards/has-permission.guard';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserEntity })
  @UseGuards(JwtAuthGuard, HasPermissionGuard)
  @HasPermission('user:create')
  async store(@Body() createUserDto: CreateUserDto) {
    return new UserEntity(await this.usersService.create(createUserDto));
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  @UseGuards(JwtAuthGuard, HasPermissionGuard)
  @HasPermission('user:viewAny')
  async index() {
    const users = await this.usersService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, HasPermissionGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  @HasPermission('user:view')
  async show(@Param('id', ParseIntPipe) id: number) {
    return new UserEntity(await this.usersService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, HasPermissionGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserEntity })
  @HasPermission('user:update')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return new UserEntity(await this.usersService.update(id, updateUserDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, HasPermissionGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  @HasPermission('user:delete')
  async destroy(@Param('id', ParseIntPipe) id: number) {
    return new UserEntity(await this.usersService.remove(id));
  }
}
