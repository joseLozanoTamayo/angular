import { async, TestBed, inject } from '@angular/core/testing';

import { ListUsersProxyService } from './list-users-proxy.service';
import { HttpModule } from '@angular/http';

describe('ListUsersProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ListUsersProxyService]
    });
  });

  it('should be created', inject([ListUsersProxyService], (service: ListUsersProxyService) => {
    expect(service).toBeTruthy();
  }));

  it ('should get users', async(() => {
    console.log('Begin get users');
    const service: ListUsersProxyService = TestBed.get(ListUsersProxyService);
    service.getUsers().subscribe(
      (response) => { console.log('RESPONSE : ' + JSON.stringify(response));
      expect(response.json()).not.toBeNull()},
      (error) => fail(error)
    );
  }));
});
