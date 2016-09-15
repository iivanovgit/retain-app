import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';



@Injectable()
export class ApiService {
    headers: Headers = new Headers({
        'Content-Type': 'application.json',
        Accept: 'application.json'
    });
    api_url: string;


    constructor(
        private http: Http) {
        this.api_url = 'https://retain-app.firebaseio.com';
    }

    private getJson(response: Response) {
        return response.json();
    }

    private checkForError(response: Response): Response {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    }

    get(path: string): Observable<any> {
        return this.http.get(`${this.api_url}${path}.json`, { headers: this.headers })
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(response => response.json());
    }

    post(path: string, body): Observable<any> {
        return this.http.post(
            `${this.api_url}${path}.json`,
            JSON.stringify(body),
            { headers: this.headers }
        )
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    remove(path: string): Observable<any> {
        return this.http.delete(
            `${this.api_url}${path}`,
            { headers: this.headers }
        )
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }
}
