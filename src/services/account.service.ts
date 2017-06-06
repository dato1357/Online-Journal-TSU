import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response, Headers } from '@angular/http';

import { CookieService} from 'services/cookie.service';
import {HttpService} from 'services/http.service'

@Injectable()
export class AccountService {

    private readonly sessionName: string = 'session-id';
    private _isLoggedIn: boolean = false;
    public user :any = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpService, private cookie: CookieService) {
        // this._isLoggedIn = this.cookie.read(this.sessionName) !== undefined;
    }

    login(username: string, password: string) {

        var loginData = {
            username: username,
            password: password
        };
        

        if (loginData.username == "dato" && loginData.password == "123"){
            this._isLoggedIn = true;
            this.user.username = loginData.username;
            console.log(this.user)
        this.router.navigateByUrl('/');
        }
    }

    isLoggedIn() {
        return this._isLoggedIn;
    }

    logout(){
        this.user = {};
        return this._isLoggedIn = false;
    }
    
    
    //     this.http
    //         .post(`/api/account/login/?username=${username}&password=${password}`, loginData)
    //         .map((response: Response) => {
    //             if (response.status == 200) {
    //                 var sessionId = response.json.arguments;
    //                 this.cookie.setCookie(this.sessionName, sessionId, 30);
    //                 this._isLoggedIn = true;

    //                 var redirectPath = this.route.snapshot.queryParams["redirect"];
    //                 if (redirectPath === undefined) {
    //                     redirectPath = 'dashboard';
    //                 }
    //                 this.router.navigateByUrl(redirectPath);
                    
    //             } else {
    //                 this.deleteSessionCookie();
    //                 console.log(response.status);
    //                 this.router.navigate(['login', response.status]);
    //             }
    //         //    shared.unblockDocument();
    //         })
    //         .subscribe();
    // }

    // logout() {
    //     this.http
    //         .post(`/api/account/logout`, null)
    //         .map((response: Response) => {
    //             if (response.status === 200) {
    //                 this.deleteSessionCookie();
    //             } else {
    //                 this.deleteSessionCookie();
    //                 console.error('logout failed. status code: ' + response.status);
    //             }
    //             this.checkAuth();
    //         })
    //         .subscribe();
    // }


    // checkAuth() {
    //     console.log('checkAuth');
    //     this._isLoggedIn = this.cookie.read(this.sessionName) !== undefined;
    //     if (!this.isLoggedIn() && this.router.url.indexOf('login') === -1) {
    //         console.log('login/?redirect=' + this.router.url);
    //         this.router.navigateByUrl('login/?redirect=' + this.router.url);
    //     }
    // }

    // deleteSessionCookie() {
    //     this.cookie.delete(this.sessionName);
    //     this._isLoggedIn = false;
    // }
}

