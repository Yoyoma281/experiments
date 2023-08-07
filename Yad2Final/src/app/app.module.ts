import { FormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from 'src/Components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../Components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NewProductComponent } from '../Components/new-product/new-product.component';
import { HTTPService } from 'src/Services/http.service';
import { USDNISPipe } from '../Pipes/ExchangeConvert/usd-nis.pipe';
import { DateFormatPipe } from '../Pipes/DateFormat/date-format.pipe';


@NgModule({
  declarations: [
    AppComponent, 
    ProductComponent, 
    HomePageComponent, 
    NewProductComponent, 
    USDNISPipe, 
    DateFormatPipe
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
