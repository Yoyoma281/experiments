import { HTTPService } from './../../Services/http.service';
import { Component, OnInit } from '@angular/core';
import Product from 'src/Models/Product';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  products: Product[] = [];
  Price_Date: boolean = false;
  constructor(private httpService: HTTPService) { }
  
  ngOnInit() {
    this.GetProducts();
  }

  Toggle_Filter(){
    this.Price_Date = !this.Price_Date
  }
;
  GetProductsByPriceDesc(){
    this.httpService.getProductsByPriceDesc().subscribe(
      (data) => {
        this.products = data;
      },
      
      (error) => {
        console.error('Error fetching products:', error)
      }
    )
  }

  
  GetProductsByPriceAsc(){
    this.httpService.getProductsByPriceAsc().subscribe(
      (data) => {
        this.products = data;
      },
      
      (error) => {
        console.error('Error fetching products:', error)
      }
    )
  }

  GetProductsByDateDesc(){
    this.httpService.getProductsByDateDesc().subscribe(
      (data) => {
        this.products = data;
      },
      
      (error) => {
        console.error('Error fetching products:', error)
      }
    )
  }

  GetProductsByDateAsc(){
    this.httpService.getProductsByDateAsc().subscribe(
      (data) => {
        this.products = data;
      },
      
      (error) => {
        console.error('Error fetching products:', error)
      }
    )
  }

  GetProducts() {
    this.httpService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  AddProduct(product: Product) {
    this.httpService.createProduct(product).subscribe(
      (createdProduct: Product) => {
        this.products.push(createdProduct);
      },
      (error: any) => {
        console.error('Error adding product:', error);
      }
    );
  }


  deleteProduct(productId: number) {
    this.httpService.deleteProduct(productId).subscribe(
      () => {
        this.products = this.products.filter((product) => product.id !== productId);
      },
      (error: any) => {
        console.error('Error deleting product:', error);
      }
    );
  }


  updateProduct(product: Product) {
    this.httpService.updateProduct(product).subscribe(
      () => {
         console.log("Updated!")
      },
      (error: any) => {
        console.error('Error updating product:', error);
      }
    );
  }


}
