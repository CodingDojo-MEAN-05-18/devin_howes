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
    if (formData.valid) {
      // console.log(formData);
      event.preventDefault();
      this.quotes.push(this.quote);
      console.log(this.quotes);
      this.quote = new Quote();
      formData.reset();
    }
  }
}
