import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  gameId = 1;

  constructor() { }

  ngOnInit() {
  }

  setGame(id) {
    return this.gameId = id;
  }
}
