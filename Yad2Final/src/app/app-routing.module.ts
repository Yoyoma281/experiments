import { ProductComponent } from 'src/Components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/Components/home-page/home-page.component';
import { NewProductComponent } from 'src/Components/new-product/new-product.component';


const routes: Routes = [
  { path: "", component: HomePageComponent},
  { path: 'product/:id', component: ProductComponent },
  { path: "AddProduct", component: NewProductComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }