import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Player } from '../player';

@Injectable()
export class PlayerService {
  // mock api for dev
  private base = 'https://5b3ab73c45df9d0014c49bb6.mockapi.io/players/'

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.base);
  }

  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(`${this.base}/${id}`);
  }

  createPlayer(players: Player): Observable<Player> {
    return this.http.post<Player>(this.base, players);
  }

  deletePlayer(player: Player): Observable<Player> {
    return this.http.delete<Player>(`${this.base}/${player._id}`);
  }

}
