import { NgModule }              from '@angular/core';
import {Routes }  from '@angular/router';
import {HomeComponent} from '../journal/home/home.component';
import {LoginComponent} from '../authorization/login.component';
import {PageNotFoundComponent} from '../journal/notfound.component';
import {RegisterUserComponent} from '../journal/register/register-user.component';
import {JournalsComponent} from '../journal/journals.list/journals.list.component';
import {JournalDetailsComponent} from '../journal/journal.details/journal.details.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterUserComponent},
  { path: 'journals-and-books', component: JournalsComponent},
  { path: 'journals-and-books/details/:id', component: JournalDetailsComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
