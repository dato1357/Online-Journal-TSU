import { AccountService } from 'services/account.service';
import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private accountService : AccountService){

  }

 
  ngOnInit(){
  }
}
