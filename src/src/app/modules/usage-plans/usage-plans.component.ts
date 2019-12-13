import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../../core/service/api-gateway.service';

@Component({
  selector: 'app-usage-plans',
  templateUrl: './usage-plans.component.html',
  styleUrls: ['./usage-plans.component.scss']
})
export class UsagePlansComponent implements OnInit {
  usagePlans: any[];
  showSpinner = true;

  constructor(private apiGatewayService: ApiGatewayService) {}

  ngOnInit() {
    this.apiGatewayService.getUsagePlans().subscribe(result => {
      this.usagePlans = result;
      this.showSpinner = false;
    });
  }
}
