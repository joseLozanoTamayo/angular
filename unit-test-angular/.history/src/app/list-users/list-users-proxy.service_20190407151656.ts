import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
 
 
@Injectable()
export class ListUsersProxyService {
 
  constructor(private http: Http) { }
 
  getUsers(): Observable {
    return this.http.get(`https://api.github.com/users`);
  }
 
}