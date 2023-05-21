import { CanActivateFn } from '@angular/router';
import { checkToken } from 'src/app/utils/common';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  return checkToken() !== undefined;
};
