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
  myQuotes = [];

  onSubmit(event, formData) {
    event.preventDefault();
    console.log(formData);

    this.myQuotes.push(this.quote);

    this.quote = new Quote();
    formData.reset();
  }

  deleteQuote(quote) {
    console.log(quote);
    const idx = this.myQuotes.indexOf(quote);
    this.myQuotes.splice(idx, 1);
  }
}
