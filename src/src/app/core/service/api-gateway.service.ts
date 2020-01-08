import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { environment } from '../../../environments/environment';
import { AuthService, AuthState } from './auth.service';
import { from, of } from 'rxjs';
import { tap, mergeMap } from 'rxjs/operators';

export interface IDocumentModel {
  description: string;
  overview: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {
  auth: AuthState;
  
  apis$ = from(API.get(environment.portalApiName, '/apis', {}));

  constructor(private authService: AuthService) {
    this.authService.auth$.subscribe(auth => (this.auth = auth));
  }

  getUsagePlans() {
    return from(API.get(environment.portalApiName, '/usageplans', {}));
  }

  getSwagger(apiId: string, stage: string) {
    return from(
      API.get(environment.portalApiName, '/swagger', {
        queryStringParameters: { apiId, stage }
      })
    );
  }

  getDocumentation(apiId: string, stage: string) {
    return from(
      API.get(environment.portalApiName, '/documentation', {
        queryStringParameters: { apiId, stage }
      })
    );
  }

  getSdk(apiId: string, stage: string, sdkType: string) {
    return from(
      API.get(environment.portalApiName, '/sdk', {
        queryStringParameters: { apiId, stage, sdkType }
      })
    );
  }

  subscribeApiKey() {
    return from(
      API.put(environment.portalApiName, '/subscribe', {
        body: {
          identityId: this.auth.id,
          usagePlanId: environment.usagePlan
        }
      })
    );
  }

  getApiKeys() {
    if (this.apiKeyObject !== 'null' && this.apiKeyObject != null && this.apiKeyObject !== undefined && this.apiKeyObject.length > 0) {
      return of(this.apiKeyObject);
    }
    return from(
      API.get(environment.portalApiName, '/apikeys', {
        queryStringParameters: { identityId: this.auth.id }
      })
    ).pipe(
      tap(apiKey => {
        localStorage.setItem('apiKeyObject', JSON.stringify(apiKey));
      })
    );
  }

  get apiKey(): string {
    return localStorage.getItem('apiKey');
  }

  set apiKey(value: string) {
    localStorage.setItem('apiKey', value);
  }

  private get apiKeyObject(): string {
    return JSON.parse(localStorage.getItem('apiKeyObject'));
  }

  getUsage() {
    return this.getApiKeys().pipe(mergeMap(apiKeys => {
      return apiKeys.length === 0 ? from([]) : from(
        API.get(environment.portalApiName, '/usage', {
          queryStringParameters: { keyId: apiKeys[0].id, usagePlanId: '9esq4a' }
        })
      );
    }));
  }
}
