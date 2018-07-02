import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Note } from '../../note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, OnDestroy {
  notes: Note[] = [];
  sub: Subscription;

  constructor(private readonly noteService: NoteService) { }

  ngOnInit() {
    this.sub = this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }
}
