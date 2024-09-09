import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
// console.log({route,state})

  // console.log(url)

  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.authStatus()===AuthStatus.authenticated) {
    return true
  }

  // const url=state.url
  // localStorage.setItem('url',url)

  // if (authService.authStatus() === AuthStatus.checking){
  //   return false
  // }

  router.navigateByUrl('/auth/login')
  return false;
};
