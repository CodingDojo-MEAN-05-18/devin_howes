import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteListComponent } from './notes/note-list/note-list.component';
import { NotFoundComponent } from './notes/not-found/not-found.component';
import { NoteNewComponent } from './notes/note-new/note-new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
  {
    path: 'notes',
    component: NoteListComponent,
  },
  {
    path: 'notes/new',
    component: NoteNewComponent,
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
