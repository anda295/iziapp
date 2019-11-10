import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  @Input('auth-mode') authMode: 'login' | 'register' | 'createEmail'= 'login';
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() {

  }

  onLoginFormResult(e){
    if(e.signedIn)
      this.closeDialog();
  }

  onRegisterFormResult(e){
    if(e.signedUp)
      this.closeDialog();
  }

  openDialog(mode: 'login' | 'register'| 'createEmail' = 'login'){
    this.authMode = mode;
    this.modalActions.emit({action:"modal", params:['open']});
  }

  closeDialog(){
    this.modalActions.emit({action:"modal", params:['close']});
  }

  ngOnInit() {
  }

  isCreateEmailMode(){return this.authMode == 'createEmail'}

  isLoginMode(){return this.authMode == 'login'}
  isRegisterMode(){return this.authMode == 'register'}


}