import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '@env';
import { AuthService } from '@app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public version = environment.version;
  isLoggedIn = false;
  isNavbarCollapsed = true;
  user: { id: string; username: string; email: string };

  constructor(private authService: AuthService, private router: Router, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(
      isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
        this.changeDetectorRef.detectChanges();
        console.log('Logged in = ' + this.isLoggedIn);
      }
    );

    this.authService.auth$.subscribe(({ id, username, email }) => {
      this.user = { id, username, email };
      this.changeDetectorRef.detectChanges();
    });

  }

  login() {
    this.authService.redirectUrl = this.router.url;
    this.authService.redirectToHostedUI();
  }

  logout() {
    this.authService.logOut();
  }

  private isLoggingIn(isLoggedIn: boolean): boolean {
    return this.isLoggedIn === false && isLoggedIn === true;
  }
}
