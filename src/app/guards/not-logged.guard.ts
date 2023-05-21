import { CanActivateFn } from '@angular/router';
import { checkToken } from '../utils/common';

export const notLoggedGuard: CanActivateFn = (route, state) => {
  return checkToken() === undefined;
};
