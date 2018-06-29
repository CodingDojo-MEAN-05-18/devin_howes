import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../product';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductHandlerService } from '../product-handler.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product[] = [];
  sub: Subscription;

  constructor(
    private productService: ProductHandlerService,
    private router: Router) { }

  ngOnInit() {
    this.product = this.productService.displayProduct();
  }

  onClick(event: Event) {
    event.stopPropagation();
  }

  onUpdate() {
    this.productService.updateProduct(this.product)
    .subscribe(updatedProduct => {
      console.log('Updated product', updatedProduct);
      this.router.navigate(['products']);
    });
  }

  onDelete(productToDelete: Product) {
    console.log('Deleteing Product', productToDelete);
    this.productService.deleteProduct(productToDelete)
      .subscribe(deletedProduct => {
        console.log('Deleted Product', deletedProduct);
        this.router.navigate(['products']);
      });
  }

}
