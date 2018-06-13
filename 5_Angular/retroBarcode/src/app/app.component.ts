import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors: string[] = [
    'red',
    'pink',
    'aliceblue',
    'antiquewhite',
    'blue',
    'cadetblue',
    'coral',
    'blanchedalmond',
  ];
}
