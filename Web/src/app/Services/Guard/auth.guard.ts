import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { KeycloakService } from '../Keycloak/keycloak.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {

  const tokenService: KeycloakService = inject(KeycloakService);

  const router :Router = inject(Router);


  if (route.routeConfig?.path === 'landing') {
    return true;
  }


  if(tokenService.keycloak.isTokenExpired()){
    router.navigate(['login']);
    return false;
  }


  return true;
};
