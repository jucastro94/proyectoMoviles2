import { CanActivateFn } from '@angular/router';
import { checkToken } from '../utilities/common';

export const notLoggedGuard: CanActivateFn = (route, state) => {
  return checkToken() === undefined;
};
