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
      if (result.length > 0) {
      this.apiGatewayService.apiKey = result[0].value;
      }
    },
    err => console.error(err),
    () => this.showSpinner = false);
  }

}
