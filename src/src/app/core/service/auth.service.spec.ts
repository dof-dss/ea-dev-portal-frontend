import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthService] });
    service = TestBed.get(AuthService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
