import { Component, OnInit } from '@angular/core';
import { faHome, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navItems = [
    { link: '/home', title: 'Home', icon: faHome },
    { link: '/api', title: 'API Reference',  icon: faLayerGroup }
  ];

  constructor() { }

  ngOnInit() {
  }

}
