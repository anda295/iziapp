import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from '@angular/http';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private contactsUrl = '/api/';

  constructor (private http: Http) {}
  get isLoggedIn() {
    console.log("isLoggedIn");
    return this.loggedIn.asObservable(); // {2}
  }



  createAccount( user: {}){
    return this.http.post("api/signup",user)
    .toPromise()
    .then(response => response.json() )
    .catch(this.handleError);
  }
  login(loginUser:{}){
    return this.http.post("api/login",loginUser)
    .toPromise()
    .then(res=>{res.json(); this.loggedIn.next(true);})
    .catch(this.handleError);


//.catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
    let errMsg = (error._body) ? error._body: error.message ;
    return Promise.reject(errMsg);
  }

  // login(user: User){
  //   if (user.userName !== '' && user.password != '' ) { // {3}
  //     this.loggedIn.next(true);
  //     this.router.navigate(['/']);
  //   }
  // }

  // logout() {                            // {4}
  //   this.loggedIn.next(false);
  //   this.router.navigate(['/login']);
  // }
}