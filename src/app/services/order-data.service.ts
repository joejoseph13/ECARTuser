import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { OrderProduct } from '../models/orderproduct';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

 private apiUrl=environment.apiUrl;
  constructor(private http: HttpClient) { }

  orderitem(order:OrderProduct){    
    return this.http.post(`${this.apiUrl}/api/Order/Additem`,order);
  }

  ordereditem(userId:number){
    // console.log('id is', userId);
    return this.http.get(`${this.apiUrl}/api/Order/allOrderuserid?id=${userId}`);
  }

  getProductsbyid(id:number){
    return this.http.get(`${this.apiUrl}/api/Product/ProductById?id=${id}`);
  }

  deleteMyOrder(id:number){
    return this.http.delete(`${this.apiUrl}/api/Order/Delete?id=${id}`);
  }
}
