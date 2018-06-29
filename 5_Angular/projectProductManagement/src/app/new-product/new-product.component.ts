import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductHandlerService } from '../product-handler.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit, OnDestroy {
  product = new Product();
  sub: Subscription;

  @Output() newProduct = new EventEmitter<Product>();

  constructor(
    private readonly productService: ProductHandlerService, 
    private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.product);

    this.sub = this.productService.createProduct(this.product)
      .subscribe(product => {
        console.log('product from API', product);
        this.newProduct.emit(product);
        this.product = new Product();
        form.reset();
        this.router.navigate(['products']);
      });
  }
}
