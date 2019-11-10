import { Injectable,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { distinctUntilChanged, map } from 'rxjs/operators';

//import { User } from './user';

@Injectable()
export class HeaderService {
  private service='';
  @Output() serviceType: EventEmitter<string> = new EventEmitter();

 
   setServiceMode (mode: string) {
     this.service= mode;
      this.serviceType.emit(mode);
    }
    getServiceMode(){
      return this.service;
    }

  constructor(
  ) {

  }

}