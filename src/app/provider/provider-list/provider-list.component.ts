import { Component, OnInit , Input } from '@angular/core';
import { Provider } from '../provider';
import {ProviderDetailsComponent} from "../provider-details/provider-details.component"

@Component({
  selector: 'provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})

export class ProviderListComponent implements OnInit {
  @Input()
  providers : Provider[];

  constructor() {}

  ngOnInit() {
    console.log(this.providers)
  }
}
