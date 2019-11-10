import { Component, Input } from '@angular/core';
import { Provider } from '../provider';

@Component({
  selector: 'provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css'],
})

export class ProviderDetailsComponent  {
    @Input()
    provider: Provider;

  constructor() { }

  
}