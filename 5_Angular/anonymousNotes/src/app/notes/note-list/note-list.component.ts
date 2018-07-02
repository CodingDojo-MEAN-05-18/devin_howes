import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Note } from '../../note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, OnDestroy {
  note = new Note();
  notes: Note[] = [];
  sub: Subscription;

  constructor(
    private readonly noteService: NoteService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sub = this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    // event.preventDefault();
    console.log('submitting note', form, this.note);

    this.sub = this.noteService.createNote(this.note)
      .subscribe(note => {
        console.log('note from api', note);
        this.router.navigateByUrl('notes');
      });
  }

}
