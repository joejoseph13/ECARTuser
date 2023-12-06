import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { userRegistration } from '../models/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = environment.apiUrl;

  constructor( private http : HttpClient) {
}
userSignup(data: userRegistration): Observable<any> {
  return this.http.post(`${this.apiUrl}/api/User/userRegistration`, data);
}
}
