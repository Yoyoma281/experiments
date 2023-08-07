import { HTTPService } from './../../Services/http.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import Product from 'src/Models/Product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

  product = new Product();  //Had erros with duplicate id's, because of these instances.
  newproduct = new Product();

  constructor(private http: HTTPService) {}

  AddProduct() {
     this.newproduct = new Product(
      this.product.Name,
      this.product.ExtraDetails,
      this.product.DatePublished,
      this.product.image,
      this.product.Price,
      this.product.phoneNumber,
      this.product.city
    );

    this.http.createProduct(this.newproduct).subscribe(
      (response: Product) => {
        console.log('Product created:');
        alert(this.newproduct.Name + "created !")
      },
      (error: any) => {
        console.error('Error creating product:', error);
      }
    );
  }
}