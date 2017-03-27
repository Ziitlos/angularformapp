/**
 * Created by hkfq4 on 27.03.2017.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Headers, URLSearchParams, Response} from '@angular/http';
import {Flug} from '../../entities/flug';


@Injectable()
export class FlugService {

    constructor(private http: Http) {
    }

    find(von: string, nach: string): Observable<Flug[]> {

        let search = new URLSearchParams();
        let url = "http://www.angular.at/api/flug";

        search.set('abflugort', von);
        search.set('zielort', nach);

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        return this.http
            .get(url, { search, headers })
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

}
