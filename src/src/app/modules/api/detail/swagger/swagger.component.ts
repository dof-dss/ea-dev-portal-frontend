import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { ApiGatewayService } from "../../../../core/service/api-gateway.service";
import { map } from 'rxjs/operators';

declare const SwaggerUIBundle: any;

@Component({
  selector: "app-swagger",
  templateUrl: "./swagger.component.html",
  styleUrls: ["./swagger.component.scss"]
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
    this.stage = "beta"; // this.route.snapshot.paramMap.get('stage');

    this.apiGatewayService.getSwagger(this.apiId, "beta").subscribe(result => {
      this.showSubscribe = result.securityDefinitions != null && result.securityDefinitions.api_key != null;
      this.ui = SwaggerUIBundle({
        spec: result,
        domNode: this.el.nativeElement.querySelector(".swagger-container"),
        inputType: "json",
        deepLinking: true,
        presets: [SwaggerUIBundle.presets.apis]
      });
      this.setApiKey();
    });
  }

  subscribe(): void {
    this.apiGatewayService.subscribeApiKey().pipe(
      map(result => {
        this.apiGatewayService.apiKey = result;
        this.ui.preauthorizeApiKey("api_key", result);
      })
    );
  }

  setApiKey() {
    if (this.apiGatewayService.apiKey) {
      this.ui.preauthorizeApiKey("api_key", this.apiGatewayService.apiKey);
    } else {
      this.apiGatewayService.getApiKeys().pipe(
        map(result => {
        this.apiGatewayService.apiKey = result[0].value;
        this.ui.preauthorizeApiKey("api_key", this.apiGatewayService.apiKey);
      }));
    }
  }
}
