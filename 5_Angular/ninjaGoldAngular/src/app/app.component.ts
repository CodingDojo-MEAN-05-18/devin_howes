import { Component, OnInit } from '@angular/core';
import { NinjaHandlerService } from './ninja-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ninja Gold';
  goldCount: number;

  constructor(private _ninjaHandler: NinjaHandlerService) { }

  ngOnInit() {
    this.goldCount = this._ninjaHandler.goldCount;
  }
}
