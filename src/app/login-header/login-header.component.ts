import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {AuthDialogComponent} from "../auth/auth-dialog/auth-dialog.component";
import {AuthService} from "../auth/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
 
})

export class LoginHeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;                  // {1}
  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(private authService: AuthService) {

   }

  ngOnInit() {
    console.log("test");
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }

  presentAuthDialog(mode?: 'login'| 'register'){
    console.log(mode);
    this.authDialog.openDialog(mode);
  }
  onLogout(){
  }

}