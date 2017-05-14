import { Injectable } from "@angular/core";
import { Router, CanActivate,RouterStateSnapshot  } from "@angular/router";
import { AccountService } from "services/account.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router) { }

    canActivate() {
        var isLoggedIn = this.accountService.isLoggedIn();
        if (!isLoggedIn) {
         this.router.navigateByUrl("login");
        }       
        return isLoggedIn;
    }
}