import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';
import { Auth } from 'aws-amplify';
import { Hub } from '@aws-amplify/core';

export interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
  id: string | null;
  email: string | null;
}

const initialAuthState = {
  isLoggedIn: false,
  username: null,
  id: null,
  email: null
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authState = new BehaviorSubject<AuthState>(initialAuthState);

  readonly auth$ = this.authState.asObservable();
  readonly isLoggedIn$ = this.auth$.pipe(map(state => state.isLoggedIn));

  constructor() {
    Auth.currentAuthenticatedUser().then(
      (user: any) => this.setUser(user),
      err => this.authState.next(initialAuthState)
    );

    Hub.listen('auth', ({ payload: { event, data, message } }) => {
      if (event === 'signIn') {
        this.setUser(data);
      } else if (event === 'oAuthSignOut') {
        this.authState.next(initialAuthState);
      }
      console.log(message);
    });
  }

  private setUser(user: any) {
    if (!user) {
      console.log('User does not exist');
      return;
    }
    if (user.signInUserSession) {
      this.updateAuthState(user.signInUserSession.idToken.jwtToken, user.username);
    } else {
      this.updateUserSession(user);
    }
  }

  public redirectToHostedUI() {
    Auth.federatedSignIn();
  }

  public logOut() {
    Auth.signOut().then(() => {
      localStorage.clear();
    });
  }

  get redirectUrl(): string {
    return localStorage.getItem('redirectUrl');
  }

  set redirectUrl(value: string) {
    localStorage.setItem('redirectUrl', value);
  }

  isAdmin(): Promise<boolean> {
    return Auth.currentSession()
      .then(session => {
        const groups = session.getIdToken().payload['cognito:groups'];
        if (groups !== undefined && groups.some(x => x === 'Admin')) {
          return true;
        }
        return false;
      })
      .catch(err => {
        return false;
      });
  }

  private updateUserSession(user: any) {
    user.getSession((err, session) => {
      if (err) {
        console.log(err);
        return;
      }
      this.updateAuthState(session.idToken.jwtToken, user.username);
    });
  }

  private updateAuthState(token: string, name: string) {
    const sessionData = JSON.parse(atob(token.split('.')[1]));
    this.authState.next({
      isLoggedIn: true,
      id: sessionData.sub,
      username: name,
      email: sessionData.email
    });
  }
}
