import { TestBed, inject } from '@angular/core/testing';

import { ListUsersService } from './list-users.service';
import { ListUsersProxyServiceFake } from './list-users-proxy.service.fake.spec';

describe('ListUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListUsersService,
        {provide: ListUsersService, useClass: ListUsersProxyServiceFake}]
    });
  });

  it('should be created', inject([ListUsersService], (service: ListUsersService) => {
    expect(service).toBeTruthy();
  }));

  /*it('should get users', () => {
    console.log('Entro aca.... ' + 'users');
    const service: ListUsersService = TestBed.get(ListUsersService);
    service.getUsers().subscribe(
      (users) => {
        // console.log(' AVATAR : ' + users[0].avatar);
        expect(users[0].login).toEqual('mojombo');
        // expect(users[0].avatar).toBeDefined();
      }
    );
  });*/
});
