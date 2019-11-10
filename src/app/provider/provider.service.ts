import { Injectable } from '@angular/core';
import { Provider } from './provider';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProviderService {
    private contactsUrl = '/api/provider';

    constructor (private http: Http) {}

    // get("/api/contacts")
    getTopFoodProviders(): Promise<Provider[]> {
      return this.http.get(this.contactsUrl+"/food")
                 .toPromise()
                 .then(response => response.json() as Provider[])
                 .catch(this.handleError);
    }
    getTopCleanProviders(): Promise<Provider[]> {
      return this.http.get(this.contactsUrl+"/clean")
                 .toPromise()
                 .then(response => response.json() as Provider[])
                 .catch(this.handleError);
    }


    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
    }
}