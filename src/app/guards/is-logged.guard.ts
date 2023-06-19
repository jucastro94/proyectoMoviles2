import { CanActivateFn } from '@angular/router';
import { checkToken } from 'src/app/utilities/common';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  return checkToken() !== undefined;
};
