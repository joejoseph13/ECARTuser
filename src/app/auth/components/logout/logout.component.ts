import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router to handle navigation
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router,private logoutservices:LogoutService) {}

  logout() {
    this.logoutservices.logout();
    this.router.navigateByUrl('/auth/login'); // Replace 'home' with the appropriate route
  }
}

