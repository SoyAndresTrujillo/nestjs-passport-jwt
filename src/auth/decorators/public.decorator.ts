import { SetMetadata } from '@nestjs/common';

export const DECORATOR_PUBLIC_KEY = 'is_public';

export const Public = () => SetMetadata(DECORATOR_PUBLIC_KEY, true);
