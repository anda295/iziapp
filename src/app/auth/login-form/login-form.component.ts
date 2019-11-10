import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],

})

export class LoginFormComponent implements OnInit {
  signInUser = {
    email: '',
    password: ''
  };
  error='';
 
  @Output() onFormResult = new EventEmitter<any>();
  constructor(private authService: AuthService) { }

  ngOnInit() {}

   onSignInSubmit(){
    console.log(this.signInUser);
    var user =   this.authService.login(this.signInUser)
    .then(user=> this.onFormResult.emit({signedIn:true}),(errors)=>{
      this.error = errors;
    });
  
  }
}