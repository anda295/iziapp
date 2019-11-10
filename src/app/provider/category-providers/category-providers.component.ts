import { Component, OnInit, Input } from '@angular/core';
import { Provider } from '../provider';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../header.service';
import {ProviderService} from "../provider.service"

@Component({
  selector: 'category-providers',
  templateUrl: './category-providers.component.html',
  styleUrls: ['./category-providers.component.css']
})

export class CategoryProvidersComponent implements OnInit {
  serviceType: string;
  title:string;
  subTitle:string;
  providers: Provider[];

  constructor(private providerService: ProviderService, private route: ActivatedRoute, private headerService:HeaderService) { }

  ngOnInit() {
    this.serviceType = this.route.snapshot.params.serviceType;
    console.log(this.serviceType);
    this.headerService.setServiceMode(this.serviceType);
    this.setServiceData();
  }

  onSelectService(type){
    this.serviceType = type ;
    this.setServiceData();
  }

  isCleanService() { return this.serviceType == 'clean' }
  
  isFoodService() { return this.serviceType == 'food' }

  setServiceData(){
    if (this.serviceType == "food") {
      console.log(this.headerService)

      this.title="Bucate gătite ca la mama acasă";
      this.subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.";
      this.providerService
        .getTopFoodProviders()
        .then((providers: Provider[]) => {
          this.providers = providers.map((provider) => {
            return provider;
          });
        });
    }
    if (this.serviceType == "clean") {
      this.title="Casa ta devine luna";
      this.subTitle="Subtitlu curatenie";

      this.providerService
        .getTopCleanProviders()
        .then((providers: Provider[]) => {
          this.providers = providers.map((provider) => {
            return provider;
          });
        });
    }
  }
}
