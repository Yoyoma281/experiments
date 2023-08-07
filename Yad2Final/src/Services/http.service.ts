import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import Product from 'src/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  private apiUrl = 'http://localhost:3000/products'; 

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductsById(id:number): Observable<Product>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);

  }

  getProductsByPriceDesc(): Observable<Product[]>{
    const params = new HttpParams().set('_sort', 'Price').set('_order', 'desc');
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  getProductsByPriceAsc(): Observable<Product[]> {
    const params = new HttpParams().set('_sort', 'Price').set('_order', 'asc');
    return this.http.get<Product[]>(this.apiUrl, { params });
  }
  
  getProductsByDateDesc(): Observable<Product[]> {
    const params = new HttpParams().set('_sort', 'DatePublished').set('_order', 'desc');
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  getProductsByDateAsc(): Observable<Product[]> {
    const params = new HttpParams().set('_sort', 'DatePublished').set('_order', 'asc');
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  deleteProduct(productId: number): Observable<void> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<void>(url);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product}`;
    return this.http.put<Product>(url, product.id);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

}
