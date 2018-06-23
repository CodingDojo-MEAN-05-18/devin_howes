import { Component, OnInit } from '@angular/core';
import { NinjaHandlerService } from '../ninja-handler.service';

@Component({
  selector: 'app-status-feed',
  templateUrl: './status-feed.component.html',
  styleUrls: ['./status-feed.component.css']
})
export class StatusFeedComponent implements OnInit {

  constructor(private _ninjaHandler: NinjaHandlerService) { }
  messages = [];

  ngOnInit() {
    this.messages = this._ninjaHandler.statusFeed;
  }

}
