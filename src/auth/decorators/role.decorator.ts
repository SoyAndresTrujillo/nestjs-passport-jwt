import { SetMetadata } from '@nestjs/common';

import { Role } from '../models/role.model';

export const DECORATOR_ROLE = 'roles';

export const Roles = (...roles: Role[]) => SetMetadata(DECORATOR_ROLE, roles);
