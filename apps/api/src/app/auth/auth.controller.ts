import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from '@spikey/api/app/auth/entity/auth.entity';
import { LoginDto } from '@spikey/api/app/auth/data/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() login: LoginDto) {
    return this.authService.login(login.email, login.password);
  }
}
