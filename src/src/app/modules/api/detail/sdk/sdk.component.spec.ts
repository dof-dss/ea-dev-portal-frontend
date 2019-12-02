import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiGatewayService } from '../../../../core/service/api-gateway.service';
import { SdkComponent } from './sdk.component';
describe('SdkComponent', () => {
  let component: SdkComponent;
  let fixture: ComponentFixture<SdkComponent>;
  beforeEach(() => {
    const apiGatewayServiceStub = {
      getSdk: (apiId, string, string1) => ({ subscribe: () => ({}) })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SdkComponent],
      providers: [
        { provide: ApiGatewayService, useValue: apiGatewayServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SdkComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('getSdk', () => {
    it('makes expected calls', () => {
      const apiGatewayServiceStub: ApiGatewayService = fixture.debugElement.injector.get(
        ApiGatewayService
      );
      spyOn(apiGatewayServiceStub, 'getSdk').and.callThrough();
      component.getSdk();
      expect(apiGatewayServiceStub.getSdk).toHaveBeenCalled();
    });
  });
});
