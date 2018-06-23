import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { StatusFeedComponent } from './status-feed/status-feed.component';

import { NinjaHandlerService } from './ninja-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    StatusFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NinjaHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
