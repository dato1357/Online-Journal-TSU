import { AccountService } from 'services/account.service';
import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { User } from '../journal/register/user';
import { NgForm } from "@angular/forms/src/forms";
@Component({
    selector: 'home',
    templateUrl: "login.component.html",
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    user: User = new User('', '', '', '');
    constructor(public router: Router, private authService: AccountService) {

    }

    login(loginForm: NgForm) {
        if (loginForm && loginForm.valid) {
            let userName = this.user.Username
            let password = this.user.Password;
            this.authService.login(userName, password);
            this.router.navigate(['/user-profile',this.authService.user.username]);

        }
    }

}
