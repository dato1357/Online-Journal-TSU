import { Component, OnInit} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'fw-register-user',
  templateUrl: 'register-user.component.html',
  styleUrls: ['register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user : User = new User('','','','');
  constructor() { }

  ngOnInit() {
  }

}
