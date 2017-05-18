/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

import { ProfileComponent } from '../component/profile/profile.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from '../app.component';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { LoginComponent } from '../component/login/login.component';
import { HomeComponent } from '../component/home/home.component';
import { RegisterComponent } from '../component/register/register.component';

import {ValidateService} from '../services/validate.service';

import { AuthGuard } from '../guards/auth.guard';

import {APP_BASE_HREF} from '@angular/common';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]}
]

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        DashboardComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent,
        ProfileComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FlashMessagesModule,
        BrowserAnimationsModule,
        MaterialModule
      ],
      providers: [ValidateService, AuthService, AuthGuard, {provide: APP_BASE_HREF, useValue : '/' }]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
