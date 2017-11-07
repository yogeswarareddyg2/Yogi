
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
 
  { path: '', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: '', component: SignupComponent },
  
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);