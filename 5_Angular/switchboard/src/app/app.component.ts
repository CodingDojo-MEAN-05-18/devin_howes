import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  buttons = [true, false, true, false, true, false, true, false, true, false];
  

  onButtonClick(idx) {
    this.buttons[idx] = !this.buttons[idx]
  }
}
