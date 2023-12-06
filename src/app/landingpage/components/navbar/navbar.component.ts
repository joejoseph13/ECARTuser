import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn(): boolean {
    // Check if the token is present in localStorage
    const token = localStorage.getItem('token');
    
    // Log the value of the token for debugging
    console.log('Token:', token);
  
    // Return true if the token is present and not expired, otherwise return false
    return !!token;
  }
  
  
  
  
  

}
