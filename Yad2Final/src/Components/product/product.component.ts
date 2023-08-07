import { HttpClient } from '@angular/common/http';
import { HTTPService } from 'src/Services/http.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/Models/Product';
import { Pipe, PipeTransform } from '@angular/core';
import { USDNISPipe } from 'src/Pipes/ExchangeConvert/usd-nis.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent{
@Input() product = new Product();
@Output() OnPurchase = new EventEmitter<number>();
DetailsShown:boolean = false
Purchased:boolean = false;
IsInProductPage: boolean = true
IsUSD: boolean = false;
IsRegularFormat:Boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private Http: HTTPService) {}
  
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
     const id = Number(params.get('id'));
     if (id && id > 0) {
      this.Http.getProductsById(id).subscribe(
        (productData) => {
          this.product = productData;
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
     }
    });
    const currentUrl = this.router.url;

    if(currentUrl === '/'){
        this.IsInProductPage = !this.IsInProductPage
    }
  }
  
  ToggleDateFormat(){
      this.IsRegularFormat = !this.IsRegularFormat;
    }
    ToggleDetails(){
      this.DetailsShown = !this.DetailsShown
    }
    ToggleUSD(){
      this.IsUSD = !this.IsUSD
    }
    Purchase(){
      this.OnPurchase.emit(this.product.id);
      this.deleteProduct(this.product.id)
      this.Purchased = true
      alert(this.product.Name + "Pruchased !")
      
    }

    deleteProduct(productId: number) {
      this.Http.deleteProduct(productId).subscribe(
        () => {
        },
        (error: any) => {
          console.error('Error deleting product:', error);
        }
      );
    }

}



