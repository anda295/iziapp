import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-signup-email-form',
  templateUrl: './signup-email-form.component.html',
  styleUrls: ['./signup-email-form.component.css']

})

export class SignupEmailFormComponent implements OnInit {
  registerUser = {
    email: '',
    password: '',
    acceptTerms:'',
    firstname:'',
    name:''
  };
  error:''
 
  @Output() onFormResult = new EventEmitter<any>();
  constructor(private authService: AuthService){}

  ngOnInit() {}

   onSignUpSubmit(){
    console.log(this.registerUser);
    var user =  this.authService.createAccount(this.registerUser)
    .then(user=> this.onFormResult.emit({signedUp:true}),(errors)=>{
      this.error = errors;
    });
    
  }
}