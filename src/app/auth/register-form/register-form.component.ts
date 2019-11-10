import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})

export class RegisterFormComponent implements OnInit {
  signInUser = {
    email: '',
    password: ''
  };
 
  @Output() onFormResult = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

  onSignInSubmit(){
    console.log("registerSubmit");
  }
}