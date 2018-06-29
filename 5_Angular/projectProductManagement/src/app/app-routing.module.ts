import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ErrorComponent } from './error/error.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductListComponent,
  },
  {
    path: 'products/new',
    pathMatch: 'full',
    component: NewProductComponent,
  },
  {
    path: 'products/edit/:id',
    pathMatch: 'full',
    component: ProductDetailComponent,
  },
  {
    path: 'products/destroy/:id',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: '**',
    component: ErrorComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
