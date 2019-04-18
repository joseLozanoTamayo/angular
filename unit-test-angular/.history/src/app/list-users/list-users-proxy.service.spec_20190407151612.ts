import { TestBed, inject } from '@angular/core/testing';

import { ListUsersProxyService } from './list-users-proxy.service';

describe('ListUsersProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListUsersProxyService]
    });
  });

  it('should be created', inject([ListUsersProxyService], (service: ListUsersProxyService) => {
    expect(service).toBeTruthy();
  }));
});
