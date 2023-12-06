import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Allproducts } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  allproduct : Allproducts[] =[ ];

  getProducts(){
    return this.http.get<Allproducts[]>(`${this.apiUrl}/api/Product/allProducts`);
  }
  
  getProductById(id: number) {
    console.log('id loaded',id);
    return this.http.get(`${this.apiUrl}/api/Product/ProductById?id=${id}`);
    
  }

  searchproducts(name:string){
    return this.http.get(`${this.apiUrl}/api/Product/ProductSearch?proName=${name}`);
  }

  searchproductsByCategoryAndName(id:number,searchValue:any){
    return this.http.post(`${this.apiUrl}/api/category/searchbycategory`, id);
  }



}
