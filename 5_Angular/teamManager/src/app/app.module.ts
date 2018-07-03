import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PlayerManagerComponent } from './players/player-manager/player-manager.component';
import { PlayerStatusComponent } from './players/player-status/player-status.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {PlayerService } from './services/player.service';

import { PlayerResolve } from './resolvers/player.resolve';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerManagerComponent,
    PlayerStatusComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlayerService, PlayerResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
