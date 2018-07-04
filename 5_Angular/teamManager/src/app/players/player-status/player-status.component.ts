import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  gameId: string;
  players: Player[] = [];
  player: Player = new Player();
  sub: Subscription;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe( params => {
      this.gameId = params.get('id');
      console.log('Modifying game', this.gameId);
    });
  }

  ngOnInit() {
    this.sub = this.playerService.getPlayers().subscribe(currentPlayers => {
      this.players = currentPlayers;
    });
  }

  setStatus(playerId: string, status: string) {
    this.player._id = playerId;

    if (this.gameId === '1') {
      this.player.statusOne = status;
    } else if (this.gameId === '2') {
      this.player.statusTwo = status;
    } else if (this.gameId === '3') {
      this.player.statusThree = status;
    } else {
      console.log('Error, invalid game number', this.gameId);
    }

    console.log(`Updating status for player id ${this.player._id} to status: ${status} in game number ${this.gameId}`);

    const currentPlayer = this.playerService.getPlayer(this.player._id);
    console.log(currentPlayer);

    this.sub = this.playerService.updatePlayer(this.player._id, this.player)
      .subscribe(updatedPlayer => {
        console.log('updated player', updatedPlayer);
        this.sub = this.playerService.getPlayers().subscribe(players => {
          this.players = players;
      });
      this.player = new Player();
    });
  }
}
