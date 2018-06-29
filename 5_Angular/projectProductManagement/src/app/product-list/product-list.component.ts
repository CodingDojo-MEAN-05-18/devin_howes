import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../product';

import { ProductHandlerService } from '../product-handler.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  sub: Subscription;

  constructor(private productService: ProductHandlerService) {}

  ngOnInit() {
    this.sub = this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy() {
    // stops memory leak from ngOnInit
    this.sub.unsubscribe();
  }

  onCreate(product: Product) {
    console.log('creating Product', product);
    this.products.push(product);
  }

  onClick(event: Event) {
    event.stopPropagation();
  }

  onDelete(productToDelete: Product) {
    console.log('Deleteing Product');
    this.productService.deleteProduct(productToDelete)
      .subscribe(deletedProduct => {
        console.log('Deleted Product', deletedProduct);

        this.products = this.products.filter(product => product.id !== deletedProduct.id);
      });
  }
}
