import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private base = '/api/notes';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.base);
  }

  getNote(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.base}/${id}`);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.base, note);
  }
}
