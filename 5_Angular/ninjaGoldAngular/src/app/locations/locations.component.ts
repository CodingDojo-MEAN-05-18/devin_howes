import { Component, OnInit } from '@angular/core';
import { NinjaHandlerService } from '../ninja-handler.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(private _ninjaHandler: NinjaHandlerService) { }

  ngOnInit() {
  }

  mineGold(data) {
    console.log('Clicked button', data);
    this._ninjaHandler.mineGold(data);
  }

}
