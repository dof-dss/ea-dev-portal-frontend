import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiGatewayService } from '../../../../core/service/api-gateway.service';
import { DocumentationComponent } from './documentation.component';
describe('DocumentationComponent', () => {
  let component: DocumentationComponent;
  let fixture: ComponentFixture<DocumentationComponent>;
  beforeEach(() => {
    const apiGatewayServiceStub = {
      getDocumentation: (apiId, string) => ({ subscribe: () => ({}) })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DocumentationComponent],
      providers: [
        { provide: ApiGatewayService, useValue: apiGatewayServiceStub }
      ]
    });
    fixture = TestBed.createComponent(DocumentationComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const apiGatewayServiceStub: ApiGatewayService = fixture.debugElement.injector.get(
        ApiGatewayService
      );
      spyOn(apiGatewayServiceStub, 'getDocumentation').and.callThrough();
      component.ngOnInit();
      expect(apiGatewayServiceStub.getDocumentation).toHaveBeenCalled();
    });
  });
});
