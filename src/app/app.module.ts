import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import "materialize-css";
import { MaterializeModule } from 'angular2-materialize';

import { LoginHeaderComponent} from './login-header/login-header.component'

import { AppComponent } from './app.component';
import { ReasonComponent } from './reasons/reason.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

import { HomeComponent } from './home/home.component';



import { AppHeaderComponent } from './app-header/app-header.component';


import { routing } from './app.routes';
import { AuthDialogComponent } from './auth/auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupEmailFormComponent } from './auth/signup-email-form/signup-email-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { AuthService } from './auth/auth.service';

import { TopProviderComponent } from './provider/top-providers/top-providers.component';
import { ProviderDetailsComponent } from './provider/provider-details/provider-details.component';
import { ProviderListComponent } from './provider/provider-list/provider-list.component';


import { CategoryProvidersComponent } from './provider/category-providers/category-providers.component';
import { CategoryProvidersHeaderComponent } from './provider/category-providers-header/category-providers-header.component';

import { ProviderService } from './provider/provider.service';
import { HeaderService } from './provider/header.service';
import { AuthProviderComponent } from './auth-provider/auth-provider.component';


@NgModule({
  declarations: [
    SignupEmailFormComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeComponent,
    LoginHeaderComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ReasonComponent,
    AppComponent,
    ProviderListComponent,
    TopProviderComponent,
    ProviderDetailsComponent,
    CategoryProvidersComponent,
    CategoryProvidersHeaderComponent,
    AuthProviderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterializeModule
  ],
  providers: [ ProviderService,
    HeaderService,
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
