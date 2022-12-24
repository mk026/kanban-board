import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { AuthRequest } from './interfaces/auth-request.interface';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): number => {
    const request = ctx.switchToHttp().getRequest<AuthRequest>();
    return request.user;
  },
);
