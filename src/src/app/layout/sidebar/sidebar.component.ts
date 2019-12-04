import { Component, OnInit } from '@angular/core';
import { faHome, faLayerGroup, faBookOpen, faLockOpen, faChartBar, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navItems = [
    { link: '/home', title: 'Home', icon: faHome },
    { link: '/api', title: 'API Reference',  icon: faLayerGroup },
    { link: '/guides', title: 'Guides',  icon: faBookOpen },
    { link: '/openSource', title: 'Open Source',  icon: faLockOpen },
    { link: '/usage', title: 'Usage',  icon: faChartBar },
    { link: '/apiKeys', title: 'API Keys',  icon: faKey }
  ];

  constructor() { }

  ngOnInit() {
  }

}
