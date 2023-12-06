import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageModule } from './landingpage/landingpage.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { UserhomeModule } from './userhome/userhome.module';
import { UserorderModule } from './userorder/userorder.module';
import { UserprofileModule } from './userprofile/userprofile.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { TokenInterceptor } from './core/interceptors/token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingpageModule,
    AuthModule,
    SharedModule,
    UserhomeModule,
    UserorderModule,
    UserprofileModule,
    HttpClientModule
    
  
  ],
  providers: [ {provide :HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
