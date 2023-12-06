import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayprofileComponent } from './components/displayprofile/displayprofile.component';
import { ProfilelandingComponent } from './components/profilelanding/profilelanding.component';
import { UserprofileRoutingModule } from './userprofile-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DisplayprofileComponent,
    ProfilelandingComponent
  ],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    RouterModule
  ],
  exports: [
    DisplayprofileComponent,
  
      
    ],
})
export class UserprofileModule { }
