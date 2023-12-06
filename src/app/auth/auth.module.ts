import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        LogoutComponent
    ],
    exports: [LoginComponent,
        SignupComponent,LogoutComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AuthRoutingModule
        
    ]
})
export class AuthModule { }
