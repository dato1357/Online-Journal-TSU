import { AccountService } from './../services/account.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {JournalModule} from '../journal/journal.module';
import {appRoutes} from 'app/app.routing';
import {AuthGuard} from '../services/auth.guard';
import { Ng2UploaderModule } from 'ng2-uploader';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JournalModule,
    RouterModule,
    Ng2UploaderModule,
    ToastModule,
    BrowserAnimationsModule, 
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard,ToastsManager,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
