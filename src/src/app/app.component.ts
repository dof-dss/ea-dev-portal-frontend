import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '@app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ea-dev-portal-frontend';

  constructor(private authService: AuthService, private router: Router, private ngZone: NgZone) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          this.ngZone.run(() => this.router.navigateByUrl(this.authService.redirectUrl));
        }
      }
    );
  }
}
