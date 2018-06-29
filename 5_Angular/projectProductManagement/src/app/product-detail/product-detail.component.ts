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
    private productService: ProductHandlerService
    private router: Router) { }

  ngOnInit() {
    this.product = this.productService.displayProduct();
  }

  onClick(event: Event) {
    event.stopPropagation();
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(event);
    // console.log('submitting form', this.product);

    // this.sub = this.productService.createProduct(this.product)
    //   .subscribe(product => {
    //     console.log('product from API', product);
    //     this.newProduct.emit(product);
    //     this.product = new Product();
    //     form.reset();
    //     this.router.navigate(['products']);
    //   });
  }

  onUpdate(productToUpdate: Product) {
    console.log('updating product', productToUpdate);
    // this.productService.updateProduct(productToUpdate);
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
