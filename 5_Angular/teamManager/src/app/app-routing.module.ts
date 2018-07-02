import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerListComponent } from './players/player-list/player-list.component';
import { PlayerManagerComponent } from './players/player-manager/player-manager.component';
import { PlayerStatusComponent } from './players/player-status/player-status.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'player', pathMatch: 'full' },
  { path: 'player', children: [
    {path: 'list', component: PlayerListComponent},
    {path: 'addplayer', component: PlayerManagerComponent},
  ]},
  { path: 'status', children: [
    {path: 'game/:id', component: PlayerStatusComponent},
  ]},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
players/list
players/add
/status/game/1 , 2 , 3
*/