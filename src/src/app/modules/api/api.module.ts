import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApiRoutingModule } from './api-routing.module';
import { ApiComponent } from './api.component';
import { DetailComponent } from './detail/detail.component';
import { DocumentationComponent } from './detail/documentation/documentation.component';
import { SdkComponent } from './detail/sdk/sdk.component';
import { SwaggerComponent } from './detail/swagger/swagger.component';

@NgModule({
  declarations: [ApiComponent, DetailComponent, DocumentationComponent, SdkComponent, SwaggerComponent],
  imports: [
    CommonModule,
    ApiRoutingModule,
    NgbModule
  ]
})
export class ApiModule { }
