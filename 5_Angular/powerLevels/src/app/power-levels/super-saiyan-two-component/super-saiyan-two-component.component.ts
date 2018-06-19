import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two-component',
  templateUrl: './super-saiyan-two-component.component.html',
  styleUrls: ['./super-saiyan-two-component.component.css']
})
export class SuperSaiyanTwoComponentComponent implements OnInit, OnChanges {
  @Input() powerLevel;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.powerLevel = this.powerLevel * 150;
  }

}
