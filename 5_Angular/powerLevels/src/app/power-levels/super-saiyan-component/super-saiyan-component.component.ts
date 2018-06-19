import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-component',
  templateUrl: './super-saiyan-component.component.html',
  styleUrls: ['./super-saiyan-component.component.css']
})
export class SuperSaiyanComponentComponent implements OnInit, OnChanges {
  @Input() powerLevel;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.powerLevel = this.powerLevel * 90;
  }

}
