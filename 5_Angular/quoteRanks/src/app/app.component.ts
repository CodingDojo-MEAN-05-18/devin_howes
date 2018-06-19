import { Component } from '@angular/core';

import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';
  quote = new Quote();
  quotes = [];

  onSubmit(event, formData) {
    event.preventDefault();
    console.log(formData);

    this.quotes.push(this.quote);

    this.quote = new Quote();
    formData.reset();
  }
}
