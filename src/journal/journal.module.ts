import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpService} from '../services/http.service';
import {AccountService} from '../services/account.service';
import {CookieService} from '../services/cookie.service';
import {HomeComponent} from '../journal/home/home.component';
import {LoginComponent} from '../authorization/login.component';
import {PageNotFoundComponent} from '../journal/not-found/notfound.component';
import {RegisterUserComponent} from '../journal/register/register-user.component';
import {JournalsComponent} from '../journal/journals.list/journals.list.component';
import {JournalDetailsComponent} from '../journal/journal.details/journal.details.component';
import {JournalService} from '../journal/journal.services/journal.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterUserComponent,
    JournalsComponent,
    JournalDetailsComponent,
    
  ],
  providers: [
    HttpService,
    CookieService,
    AccountService,

    JournalService
  ]

})
export class JournalModule { }
