import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Retro Barcode Generator';
  colors: string[] = [];

  fillArray() {
    for (let y = 0; y < 10; y++) {
      const randNum = (Math.floor(Math.random()*7) + 1);
      if (randNum === 1) {
        this.colors.push('red');
      } else if (randNum === 2) {
        this.colors.push('pink');
      } else if (randNum === 3) {
        this.colors.push('aliceblue');
      } else if (randNum === 4) {
        this.colors.push('antiquewhite');
      } else if (randNum === 5) {
        this.colors.push('blue');
      } else if (randNum === 6) {
        this.colors.push('cadetblue');
      } else if (randNum === 7) {
        this.colors.push('coral');
      } else {
        this.colors.push('blanchedalmond');
      };
    }
  }

  ngOnInit() {
    this.fillArray();
  }

}
