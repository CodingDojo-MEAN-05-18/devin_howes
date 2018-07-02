import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { Player } from '../../player';

import { PlayerService } from '../../services/player.service';


@Component({
  selector: 'app-player-manager',
  templateUrl: './player-manager.component.html',
  styleUrls: ['./player-manager.component.css']
})
export class PlayerManagerComponent implements OnInit {
  player = new Player();
  sub: Subscription;

  @Output() newPlayer = new EventEmitter<Player>();

  constructor(
    private readonly playerService: PlayerService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.player);

    this.sub = this.playerService.createPlayer(this.player)
      .subscribe(player => {
        console.log('player from api', player);
        this.router.navigateByUrl('/');
      });
  }

}
