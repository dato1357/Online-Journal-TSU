import {Component} from '@angular/core'
@Component({
    selector: 'cookie-consent',
})
export class CookieService{
    private isConsented: boolean = false;

    constructor() {
        this.isConsented = this.read('session-id') === "1";
    }

     read(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = name + "=";
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s\+/g, "");
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    }

     delete(name) {
        this.setCookie(name, "", -1);
    }

    setCookie(name: string, value: string, expireDays: number, path: string = "") {
        let d:Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires:string = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
    }

    consent(isConsent: boolean, e: any) {
        if (!isConsent) {
            return this.isConsented;
        } else if (isConsent) {
            this.setCookie('COOKIE_CONSENT', "1", 60);
            this.isConsented = true;
            e.preventDefault();
        }
    }
}
