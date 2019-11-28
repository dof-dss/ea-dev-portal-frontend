import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ApiGatewayService } from '../../../../core/service/api-gateway.service';

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.scss']
})
export class SwaggerComponent implements OnInit {
  @Input() apiId: string;
  stage: string;
  showSubscribe = false;
  ui: any;

  constructor(
      private apiGatewayService: ApiGatewayService,
      private el: ElementRef
  ) {}

  ngOnInit() {
      this.stage = 'beta'; // this.route.snapshot.paramMap.get('stage');

      this.apiGatewayService
          .getSwagger(this.apiId, 'beta')
          .subscribe(result => {
              this.showSubscribe =
                  result.securityDefinitions.api_key != null;
              this.ui = SwaggerUIBundle({
                  spec: result,
                  domNode: this.el.nativeElement.querySelector(
                      '.swagger-container'
                  ),
                  inputType: 'json',
                  deepLinking: true,
                  presets: [SwaggerUIBundle.presets.apis]
              });
          });
  }

  subscribe(): void {
      this.apiGatewayService.subscribeApiKey().subscribe(result => {
          this.ui.preauthorizeApiKey('api_key', result);
      });
  }
}
