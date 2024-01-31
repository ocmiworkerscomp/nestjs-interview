import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { error } from '@spikey/shared/responses';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: any, context: ExecutionContext, status?: any) {
    try {
      return super.handleRequest(err, user, info, context, status);
    } catch (e: any) {
      error(e.status, e.message);
    }
  }
}
