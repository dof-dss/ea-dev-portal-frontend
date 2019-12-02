import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiGatewayService } from '../../core/service/api-gateway.service';
import { ApiComponent } from './api.component';
describe('ApiComponent', () => {
  let component: ApiComponent;
  let fixture: ComponentFixture<ApiComponent>;
  beforeEach(() => {
    const apiGatewayServiceStub = {
      getAllApis: () => ({ subscribe: () => ({}) })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ApiComponent],
      providers: [
        { provide: ApiGatewayService, useValue: apiGatewayServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ApiComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('showSpinner defaults to: true', () => {
    expect(component.showSpinner).toEqual(true);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getAllApis').and.callThrough();
      component.ngOnInit();
      expect(component.getAllApis).toHaveBeenCalled();
    });
  });
  describe('getAllApis', () => {
    it('makes expected calls', () => {
      const apiGatewayServiceStub: ApiGatewayService = fixture.debugElement.injector.get(
        ApiGatewayService
      );
      spyOn(apiGatewayServiceStub, 'getAllApis').and.callThrough();
      component.getAllApis();
      expect(apiGatewayServiceStub.getAllApis).toHaveBeenCalled();
    });
  });
});
