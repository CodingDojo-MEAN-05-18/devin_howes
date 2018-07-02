import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Note } from '../../note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit, OnDestroy {
  note = new Note();
  sub: Subscription;

  @Output() newNote = new EventEmitter<Note>();

  constructor(
    private readonly noteService: NoteService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.noteService.getNotes();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting note', form, this.note);

    this.sub = this.noteService.createNote(this.note)
      .subscribe(note => {
        console.log('note from api', note);
        form.reset();
        this.noteService.getNotes();
        this.router.navigateByUrl('notes');
      });
  }

}
