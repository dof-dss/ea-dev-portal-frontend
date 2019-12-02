import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ApiGatewayService } from '../../../../core/service/api-gateway.service';
import { SwaggerComponent } from './swagger.component';
describe('SwaggerComponent', () => {
  let component: SwaggerComponent;
  let fixture: ComponentFixture<SwaggerComponent>;
  beforeEach(() => {
    const elementRefStub = { nativeElement: { querySelector: () => ({}) } };
    const apiGatewayServiceStub = {
      getSwagger: (apiId, string) => ({ subscribe: () => ({}) }),
      subscribeApiKey: () => ({ subscribe: () => ({}) })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SwaggerComponent],
      providers: [
        { provide: ElementRef, useValue: elementRefStub },
        { provide: ApiGatewayService, useValue: apiGatewayServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SwaggerComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('showSubscribe defaults to: false', () => {
    expect(component.showSubscribe).toEqual(false);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const apiGatewayServiceStub: ApiGatewayService = fixture.debugElement.injector.get(
        ApiGatewayService
      );
      spyOn(apiGatewayServiceStub, 'getSwagger').and.callThrough();
      component.ngOnInit();
      expect(apiGatewayServiceStub.getSwagger).toHaveBeenCalled();
    });
  });
  describe('subscribe', () => {
    it('makes expected calls', () => {
      const apiGatewayServiceStub: ApiGatewayService = fixture.debugElement.injector.get(
        ApiGatewayService
      );
      spyOn(apiGatewayServiceStub, 'subscribeApiKey').and.callThrough();
      component.subscribe();
      expect(apiGatewayServiceStub.subscribeApiKey).toHaveBeenCalled();
    });
  });
});
