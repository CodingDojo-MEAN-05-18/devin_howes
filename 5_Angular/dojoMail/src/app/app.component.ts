import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails: {'email': string, 'important': boolean, 'subject': string, 'content': string}[] = [
    {
      email: 'bill@gates.com', 
      important: true, 
      subject: 'New Windows',
      content: 'Windows XI will launch in Spring 2019!',
    },
    {
      email: 'ada@lovelace.com', 
      important: true, 
      subject: 'Programmers',
      content: 'Enchantress of numbers.',
    },
    {
      email: 'john@carmac.com', 
      important: false, 
      subject: 'Updated Algo',
      content: 'New algorithm for shadow volumes.',
    },
    {
      email: 'gabe@newel.com', 
      important: false, 
      subject: 'HL3!',
      content: 'Just kidding...',
    },
  ];
}
