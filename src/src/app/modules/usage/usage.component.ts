import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../../core/service/api-gateway.service';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {
  usagePlans: any[];
  showSpinner = true;

  constructor(private apiGatewayService: ApiGatewayService) { }

  ngOnInit() {
    this.apiGatewayService.getUsagePlans().subscribe(result => {
      this.usagePlans = result;
      this.showSpinner = false;
    });
  }

}
