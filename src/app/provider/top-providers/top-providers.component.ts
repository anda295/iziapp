import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';
import { ProviderListComponent } from '../provider-list/provider-list.component';

@Component({
  selector: 'top-provider',
  templateUrl: './top-providers.component.html',
  styleUrls: ['./top-providers.component.css']
})

export class TopProviderComponent implements OnInit {

  foodProviders: Provider[];
  cleanProviders: Provider[];

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
     this.providerService
      .getTopFoodProviders()
      .then((providers: Provider[]) => {
        var topProviders= providers.slice(0, 4);
        this.foodProviders = topProviders.map((provider) => {
          return provider;
        });
      });
      this.providerService
      .getTopCleanProviders()
      .then((providers: Provider[]) => {
        var topProviders= providers.slice(0, 4);
        this.cleanProviders = topProviders.map((provider) => {
          return provider;
        });
      });
  }


}