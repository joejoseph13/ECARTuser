import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderProduct } from 'src/app/models/orderproduct';
import { Allproducts } from 'src/app/models/product';
import { OrderDataService } from 'src/app/services/order-data.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  order: Allproducts;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private orderDataService: OrderDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Assuming you are passing the product ID as a route parameter 'id'
      this.getProductById(id);
    });
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe((res: Allproducts) => {
      this.order = res;
      console.log('Product Data:', this.order);
    });
  }

  orderProduct() {
    const isUserLoggedIn = !!localStorage.getItem('user_id'); // Check if user_id is in local storage

    if (isUserLoggedIn) {
      const userId = localStorage.getItem('user_id'); // Get the user_id from local storage

      // Create the OrderProduct object with the required data
      const order: OrderProduct = {
        ...this.order, // Spread the properties of Allproducts into OrderProduct
        user_id: parseInt(userId, 10),
        product_id: this.order.id,
        productName: this.order.name,
        discription: this.order.description,
        productImage: this.order.image,
        quantity: 1,
        total_price: this.order.price,
      };

      // Send the order data via the API
      this.orderDataService.orderitem(order).subscribe(
        (response: OrderProduct) => {
          console.log('Order placed successfully', response);
          this.navigate();
        },
        (error) => {
          console.log('Error placing order', error);
        }
      );
    } else {
      // User is not logged in, redirect to the login page
      this.router.navigateByUrl('/auth/login'); // Replace 'login' with the actual login route
    }
  }

  navigate() {
    this.router.navigateByUrl('/landing');
  }
}
