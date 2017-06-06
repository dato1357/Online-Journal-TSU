import { Router } from '@angular/router';
import { AccountService } from 'services/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AccountService, private router: Router){}
  title = 'app works!';

       logOut(): void {
        this.authService.logout();
        this.router.navigateByUrl('/');
    }
}
