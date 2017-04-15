import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CookieService } from 'services/cookie.service';
import { AccountService } from 'services/account.service'

@Injectable()
export class HttpService {
    private readonly host: string = 'http://localhost:32768'; //TODO : replace real with real url
    private readonly sessionName: string = 'session-id'; 

    constructor(private router: Router, private http: Http, private cookie: CookieService) {

    }

    post(url: string, body: any): Observable<any> {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });

        let options = new RequestOptions({ headers: headers, withCredentials: true });

        return this.http
            .post(this.host + url, JSON.stringify(body), options)
            .catch(this.handleError)
            .map((response: Response) => response.json());
    }

    get(url: string): Observable<any> {
        let headers = new Headers({
            'Content-Type': 'application/json',

        });
        let options = new RequestOptions({ headers: headers, withCredentials: true });

        return this.http
            .get(this.host + url, options)
            .map((response: Response, num: number) => {
                return this.handleResponse(response, num);
            })
            .catch(this.handleError);
    }

    delete(url: string, body: any): Observable<Response> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'session-id': this.cookie.read('session-id')
        });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .delete(this.host + url, options)
            .catch(this.handleError);
    }


    put(url: string, body: any): Observable<Response> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'session-id': this.cookie.read('session-id')
        });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .put(this.host + url, body)
            .catch(this.handleError);
    }

    private handleResponse(res: Response, num: number) {
        var httpResult = <any>res.json();

        if (httpResult.Parameters["unauthorized"] === "true") {
            console.warn('unauthorized');
            this.cookie.delete(this.sessionName);
            this.router.navigateByUrl('login/?redirect=' + this.router.url);
        }
        else if (httpResult.Parameters["access-denied"] === "true") {
            console.warn('access denied');
        }
        return httpResult;
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            if (error.headers["unauthorized"] === true) {
                console.log('unauthorized');
            }
            else if (error.headers["access-denied"] === true) {
                console.log('access denied');
            }
            errMsg = `${error.status} - ${error.statusText || ''} ${error}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.warn(errMsg);
        return Observable.throw(errMsg);
    }

}
