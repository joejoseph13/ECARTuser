import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userDetails } from 'src/app/models/user';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent  {
  public userdetails: userDetails = {
    user_id: 0,
    name: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(private route: ActivatedRoute, private userService: UserdetailsService) { }

  ngOnInit() {
    const userId = parseInt(localStorage.getItem('user_id'), 10); // Convert the string to a number
    this.userService.getUserDetailsid(userId).subscribe(
      (response: userDetails) => {
        this.userdetails = response;
      },
      (error) => {
        console.error('Failed to retrieve user details:', error);
      }
    );
  }

}
