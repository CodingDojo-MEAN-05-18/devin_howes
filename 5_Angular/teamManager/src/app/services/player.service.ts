import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Player } from '../player';

@Injectable()
export class PlayerService {
  // mock api for dev
  private base = 'https://5b3aaac245df9d0014c49bb0.mockapi.io/player/'

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.base);
  }

  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(`${this.base}/${id}`);
  }

  createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.base, player);
  }

  deletePlayer(player: Player): Observable<Player> {
    return this.http.delete<Player>(`${this.base}/${player._id}`);
  }

}
