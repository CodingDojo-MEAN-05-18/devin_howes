import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan-component',
  templateUrl: './saiyan-component.component.html',
  styleUrls: ['./saiyan-component.component.css']
})
export class SaiyanComponentComponent implements OnInit {
  @Input() powerLevel;
  constructor() { }

  ngOnInit() {
  }

}
