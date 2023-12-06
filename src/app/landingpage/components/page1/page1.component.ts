import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { userCategory } from 'src/app/models/category';
import { Allproducts } from 'src/app/models/product';
import { Page1Service } from 'src/app/services/page1.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component  {
  public categoryData : userCategory[]=[ ];
  public allproduct: Allproducts[] = [];
  public name: string;
  public searchForm: FormGroup;
  
  

  constructor(private categoryservice:Page1Service) {
    this.categoryservice.getCategory().subscribe((
      response : userCategory[]
    )=>{console.log(response)
    this.categoryData=response},
    (error)=>{
      console.log ('error',error);
    }
    );

    
  }

  

}
