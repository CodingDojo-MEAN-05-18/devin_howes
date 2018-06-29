import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ErrorComponent } from './error/error.component';

import { ProductHandlerService } from './product-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    NewProductComponent,
    ErrorComponent,
    FormsModule,
    HttpClientModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
