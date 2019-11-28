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
    { link: '/', title: 'Guides',  icon: faBookOpen },
    { link: '/', title: 'Open Source',  icon: faLockOpen },
    { link: '/', title: 'Usage',  icon: faChartBar },
    { link: '/', title: 'API Keys',  icon: faKey }
  ];

  constructor() { }

  ngOnInit() {
  }

}
