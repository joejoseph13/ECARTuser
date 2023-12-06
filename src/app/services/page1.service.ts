import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { userCategory } from '../models/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Page1Service {
  private apiUrl =environment.apiUrl;
  
  categoryData : userCategory []=[ ]
  

  constructor(private http:HttpClient) { }

  getCategory() {
    return this.http.get(`${this.apiUrl}/api/category/allcategory`)
  }
}
