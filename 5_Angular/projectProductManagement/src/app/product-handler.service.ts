import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from './product';

@Injectable()

export class ProductHandlerService {
  // mockAPI for products
  private base = 'https://5b3594556005b00014c5dc2e.mockapi.io/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.base, product);
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.base}/${product}`);
  }
}
