import { Component } from '@angular/core';
import { Name } from '../app/name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search Example';

  // Search filter intialized below
  filter: Name = new Name();

  // Array of names. Can be brough in from API or other also
  names = [
    { name: 'Bob' },
    { name: 'Jim ' },
    { name: 'Nancy' },
    { name: 'Lou' },
    { name: 'Penelope' },
    { name: 'Harold' },
    { name: 'Peter' },
    { name: 'Laura' },
    { name: 'Gemini' },
    { name: 'Gidget' }
  ];

}
