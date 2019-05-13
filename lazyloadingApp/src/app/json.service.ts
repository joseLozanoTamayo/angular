import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class JsonService {
    constructor(private httpClient: HttpClient) {}

    getDataWorks() {
        return "return works";
    }

    getData(url: string): Observable<any> {
        return this.httpClient.get(url).pipe(
            map(( response: any ) => {
                return response;
            }));
    }
}
