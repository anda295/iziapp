// ====== ./app/app.routes.ts ======

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryProvidersComponent } from './provider/category-providers/category-providers.component';
import { HomeComponent } from './home/home.component';
import { AuthProviderComponent } from './auth-provider/auth-provider.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'service/:serviceType', component: CategoryProvidersComponent },
  { path: 'provider', component: AuthProviderComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);