import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserDetailsid(user_id: number) {
    return this.http.get(`${this.apiUrl}/api/User/userDetailsByID?id=${user_id}`);
  }

}
