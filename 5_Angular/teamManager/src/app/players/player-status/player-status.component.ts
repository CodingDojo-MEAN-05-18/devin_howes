import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Player } from '../../player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  gameId = 1;
  players: Player[] = [];
  sub: Subscription;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.sub = this.playerService.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

  setGame(id) {
    return this.gameId = id;
  }
}
