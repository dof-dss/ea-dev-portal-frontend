import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { ApiGatewayService } from './api-gateway.service';
describe('ApiGatewayService', () => {
  let service: ApiGatewayService;
  beforeEach(() => {
    const authServiceStub = { auth$: { subscribe: () => ({}) } };
    TestBed.configureTestingModule({
      providers: [
        ApiGatewayService,
        { provide: AuthService, useValue: authServiceStub }
      ]
    });
    service = TestBed.get(ApiGatewayService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
