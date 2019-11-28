import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { environment } from '../../../environments/environment';
import { AuthService, AuthState } from './auth.service';
import { from } from 'rxjs';

export interface IDocumentModel {
  description: string;
  overview: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {
  auth: AuthState;

  constructor( private authService: AuthService) {
    this.authService.auth$.subscribe(auth => (this.auth = auth));
  }

  getAllApis() {
    return from(API.get(environment.portalApiName, '/apis', {}));
  }

  getUsagePlans() {
    return from(API.get(environment.portalApiName, '/usageplans', {}));
  }

  getSwagger(apiId: string, stage: string) {
    return from(API.get(environment.portalApiName, '/swagger', {
      queryStringParameters: { apiId, stage }
    }));
  }

  getDocumentation(apiId: string, stage: string) {
    return from(API.get(environment.portalApiName, '/documentation', {
      queryStringParameters: { apiId, stage }
    }));
  }

  getSdk(apiId: string, stage: string, sdkType: string) {
    return from(API.get(environment.portalApiName, '/sdk', {
      queryStringParameters: { apiId, stage, sdkType }
    }));
  }

  subscribeApiKey() {
    return from(API.put(environment.portalApiName, '/subscribe', {
      body: {
        identityId: this.auth.id,
        usagePlanId: environment.usagePlan
      }
    }));
  }
}
