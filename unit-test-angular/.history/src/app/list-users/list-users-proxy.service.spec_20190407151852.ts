import { async, TestBed, inject } from '@angular/core/testing';

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

  it ('should get users', async(() => {
    const service: ListUsersProxyService = TestBed.get(ListUsersProxyService);
    service.getUsers().subscribe(
      (response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error)
    );
  }));
});
