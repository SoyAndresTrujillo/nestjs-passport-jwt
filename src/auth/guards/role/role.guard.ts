import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

import { Role } from '../../models/role.model';
import { PayloadToken } from '../../models/token.model';

import { DECORATOR_ROLE } from '../../decorators/role.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflectorService: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // get roles defined in decorator controller
    const roles = this.reflectorService.get<Role[]>(
      DECORATOR_ROLE,
      context.getHandler(),
    );
    if (!roles) {
      return true;
    }

    // get token user from request express
    const request = context.switchToHttp().getRequest();
    const user = request.user as PayloadToken;

    const isAuth = roles.includes(user.role as Role);

    if (!isAuth) {
      throw new ForbiddenException('Role it is not permite');
    }

    return true;
  }
}
