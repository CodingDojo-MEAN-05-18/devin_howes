import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NotFoundComponent } from './notes/not-found/not-found.component';

import { NoteService } from './services/note.service';
import { NoteResolve } from './resolvers/note-resolver';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [NoteService, NoteResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
