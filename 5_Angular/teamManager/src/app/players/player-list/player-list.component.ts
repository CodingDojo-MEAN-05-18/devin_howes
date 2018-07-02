import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Player } from '../../player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  sub: Subscription;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.sub = this.playerService.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

}
