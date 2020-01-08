import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../../core/service/api-gateway.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {
  showSpinner = true;
  apis$ = this.apiGatewayService.apis$.pipe(finalize(() => (this.showSpinner = false)));

  constructor(private apiGatewayService: ApiGatewayService) {}
}
