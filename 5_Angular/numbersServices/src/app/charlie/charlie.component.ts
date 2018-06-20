import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-charlie',
  templateUrl: './charlie.component.html',
  styleUrls: ['./charlie.component.css']
})
export class CharlieComponent implements OnInit {
  differential: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  getDifference() {
    this.differential = this._dataService.getDifference();
  }

}
