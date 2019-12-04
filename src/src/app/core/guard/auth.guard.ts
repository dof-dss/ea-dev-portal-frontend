import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '@app/service/auth.service';
import { Auth } from 'aws-amplify';

@Injectable()
export class AuthGuard implements CanActivate {
  signedIn = false;

  constructor( private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.redirectUrl = state.url;
    return Auth.currentAuthenticatedUser()
    .then(user => {
      return true;
    })
    .catch(err => {
      this.authService.redirectToHostedUI();
      return false;
    });
  }
}
