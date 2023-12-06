import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Allproducts } from 'src/app/models/product';
import { Page1Service } from 'src/app/services/page1.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public allproducts : Allproducts [] =[];
  public name : string;
  public searchForm : FormGroup;

  
  constructor(private productService: ProductService, categoryservice: Page1Service, private route : ActivatedRoute) { 
    this.productService.getProducts().subscribe(
      (response: Allproducts[]) => {
        console.log(response)
        this.allproducts = response;
      },
      (error) => {
        console.log('error', error);
      }
    );

    this.searchForm = new FormGroup({
      searchInput: new FormControl()
    });
  }

  searchprod() {
    const searchValue = this.searchForm.get('searchInput').value;
    this.productService.searchproducts(searchValue).subscribe(
      (res: Allproducts[]) => {
        this.allproducts = res; // Update the allproduct array with the fetched data
        console.log(res);
      },
      (error) => {
        console.log('Error occurred while searching products:', error);
      }
    );
  }


  


}
