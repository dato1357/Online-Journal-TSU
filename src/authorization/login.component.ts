import {Component} from '@angular/core'
import {Router,ActivatedRoute} from '@angular/router'

import {User} from '../journal/register/user';
@Component({
    selector: 'home',
    templateUrl: "login.component.html",
    styleUrls: ['login.component.css']
})
export class LoginComponent {
     user : User = new User('','','','');
    constructor(public router : Router){

    }

    login(){
        if (this.user.Username == 'dato' && this.user.Password=='123'){
            console.log('success');
            this.router.navigateByUrl('/');
            return true;
        }
        
    }
}