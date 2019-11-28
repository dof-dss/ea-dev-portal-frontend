import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../../core/service/api-gateway.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  apis: any[];
  showSpinner = true;

  constructor(private apiGatewayService: ApiGatewayService) {}

  ngOnInit() {
    this.getAllApis();
  }

  getAllApis() {
    this.apiGatewayService.getAllApis().subscribe(apis => {
      this.apis = apis;
      this.showSpinner = false;
    });
  }
}
