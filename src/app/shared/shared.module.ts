import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersidebarComponent } from './components/usersidebar/usersidebar.component';
import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    UsersidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    UsersidebarComponent,
    
  ],
})
export class SharedModule { }
