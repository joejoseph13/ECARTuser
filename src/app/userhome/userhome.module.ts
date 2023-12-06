import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlandingpageComponent } from './components/userlandingpage/userlandingpage.component';
import { UserhomeRoutingModule } from './userhome-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserorderModule } from '../userorder/userorder.module';
import { UserprofileModule } from '../userprofile/userprofile.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserlandingpageComponent
  ],
  imports: [
    CommonModule,
    UserhomeRoutingModule,
    SharedModule,
    UserorderModule,
    UserprofileModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UserhomeModule { }
