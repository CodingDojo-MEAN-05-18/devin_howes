import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteResolve } from './resolvers/note-resolver';

import { NoteListComponent } from './notes/note-list/note-list.component';
import { NotFoundComponent } from './notes/not-found/not-found.component';

const routes: Routes = [
  {
    path: '/',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
  {
    path: 'notes',
    component: NoteListComponent,
    resolve: {
      note: NoteResolve
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
