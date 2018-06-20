import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  betaNumbers: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.betaNumbers = this._dataService.retrieveBeta();
  }

  pushRandom() {
    this._dataService.randomBeta();
  }
}
