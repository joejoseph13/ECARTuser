import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyorderComponent } from './components/myorder/myorder.component';
import { OrderhistoryComponent } from './components/orderhistory/orderhistory.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MyorderComponent,
    OrderhistoryComponent,
    PlaceorderComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserorderModule { }
