

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {LoginHeaderComponent} from '../../login-header/login-header.component'
@Component({
  selector: "category-providers-header",
  templateUrl: "./category-providers-header.component.html",
  styleUrls: ["./category-providers-header.component.css"],
})
export class CategoryProvidersHeaderComponent implements OnInit {
  title: string;
  placeholder: string;
  serviceType: string;
  @Output()
  onSelectedService = new EventEmitter<any>();

  constructor(private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
    this.serviceType = this.route.snapshot.params.serviceType;
    this.setServiceData();
  }

  setServiceData() {
    if (this.serviceType == "food") {
      this.title = "Caută bucate ca la mama acasă";
      this.placeholder = "cauta dupa feluri de mancare";
    }
    if (this.serviceType == "clean") {
      this.title = "Și casa e curată luna";
      this.placeholder = "cauta dupa cuvinte cheie";

    }
  }

  selectService(type) {
    this.serviceType = type;
    this.setServiceData();
    this.onSelectedService.emit(type);
  }

  goHome() {
    this.router.navigate([""]);
  }
}
