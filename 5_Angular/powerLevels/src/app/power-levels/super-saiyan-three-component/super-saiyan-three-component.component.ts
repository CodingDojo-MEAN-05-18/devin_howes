import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three-component',
  templateUrl: './super-saiyan-three-component.component.html',
  styleUrls: ['./super-saiyan-three-component.component.css']
})
export class SuperSaiyanThreeComponentComponent implements OnInit {
  @Input() powerLevel;
  constructor() { }

  ngOnInit() {
  }

}
