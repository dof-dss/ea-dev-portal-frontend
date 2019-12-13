import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../../core/service/api-gateway.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as moment from 'moment';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {
  showSpinner = true;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [];

  constructor(private apiGatewayService: ApiGatewayService) {
    for (let i = 0; i <= 7; i++) {
      this.barChartLabels.unshift(moment().subtract(i, 'days').format('DD/MM'));
    }
  }

  ngOnInit() {
    this.apiGatewayService.getUsage().subscribe(result => {
      // tslint:disable-next-line:forin
      for (const key in result) {
        let dataset = result[key].map((x: any[]) => x[0]);
        this.barChartData.push( { data: dataset, label: key });
      }
    },
    err => console.error(err),
    () => this.showSpinner = false);
  }
}
