import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Allproducts } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  product  : Allproducts;
constructor (private route : ActivatedRoute, 
              private productservice :ProductService
  ){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Assuming you are passing the product ID as a route parameter 'id'
      this.getProductById(id);
    });
  }

  getProductById(id: number) {
    this.productservice.getProductById(id).subscribe((res: Allproducts) => {
      this.product = res; // Store the fetched product details in 'placeorder'
    });
  }
}
