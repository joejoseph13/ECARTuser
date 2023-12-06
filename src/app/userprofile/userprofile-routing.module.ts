import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilelandingComponent } from './components/profilelanding/profilelanding.component';

const routes: Routes = [
  { path: '', component: ProfilelandingComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserprofileRoutingModule { }