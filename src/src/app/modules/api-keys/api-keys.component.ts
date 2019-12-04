import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../../core/service/api-gateway.service';

@Component({
  selector: 'app-api-keys',
  templateUrl: './api-keys.component.html',
  styleUrls: ['./api-keys.component.scss']
})
export class ApiKeysComponent implements OnInit {
  apiKeys: any[];
  showSpinner = true;

  constructor(private apiGatewayService: ApiGatewayService) { }

  ngOnInit() {
    this.apiGatewayService.getApiKeys().subscribe(result => {
      this.apiKeys = result;
      this.showSpinner = false;
    });
  }

}
