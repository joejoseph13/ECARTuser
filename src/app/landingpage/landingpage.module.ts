import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page1Component } from './components/page1/page1.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { UserorderModule } from '../userorder/userorder.module';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    LandingHomeComponent,
    NavbarComponent,
    Page1Component,
    ProductComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    UserorderModule,
    RouterModule

  ]
})
export class LandingpageModule { }
