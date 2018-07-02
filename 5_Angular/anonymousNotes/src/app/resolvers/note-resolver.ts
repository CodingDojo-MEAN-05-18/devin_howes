import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { NoteService } from '../services/note.service';
import { Note } from '../note';

@Injectable()
export class NoteResolve implements Resolve<Note> {

    constructor(private noteService: NoteService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Note> {
        return this.noteService.getNote(route.paramMap.get('id'));
    }
}
