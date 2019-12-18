import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  faHome,
  faLayerGroup,
  faBookOpen,
  faLockOpen,
  faChartBar,
  faKey,
  faFile,
  faTools
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@app/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navItems = [
    { link: '/home', title: 'Home', icon: faHome },
    { link: '/api', title: 'API Reference', icon: faLayerGroup },
    { link: '/guides', title: 'Guides', icon: faBookOpen },
    { link: '/openSource', title: 'Open Source', icon: faLockOpen },
    { link: '/usage', title: 'Usage', icon: faChartBar },
    { link: '/usagePlans', title: 'Usage Plans', icon: faFile },
    { link: '/apiKeys', title: 'API Keys', icon: faKey }
  ];

  constructor(
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.authService.isAdmin().then((result: boolean) => {
          if (result === true) {
            this.navItems.push({ link: '/admin', title: 'Admin', icon: faTools });
            this.changeDetectorRef.detectChanges();
          }
        });
      }
    });
  }
}
