import { TestBed } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';

describe('AuthorizationService', () => {
  let service: AuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return userData', () => {
    const userData = service.getUserInfo();
    expect(userData.id).toBe('1');
  });
});
