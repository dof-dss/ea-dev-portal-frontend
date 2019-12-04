import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@app/service/auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor( private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.redirectUrl = state.url;
    return true;
  }
}
