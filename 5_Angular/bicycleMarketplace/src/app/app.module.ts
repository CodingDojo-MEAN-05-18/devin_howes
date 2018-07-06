import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

import * as fromBikes from './bikes';

import { services } from './services';
import { AppRoutingModule } from './app-routing.module';

import { BikeResolve } from './resolvers';
import { SearchPipe } from './search.pipe';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    ...fromBikes.components,
    SearchPipe,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [...services, BikeResolve, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
