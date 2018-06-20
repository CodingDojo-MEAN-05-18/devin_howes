import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit, OnChanges {
  @Input() myQuotes: Quote[];
  @Output() deleteEmitter = new EventEmitter();

  title = 'All Quotes';
  constructor() { }

  upVote(quote) {
    quote.score++;
  }

  downVote(quote) {
    quote.score--;
  }

  delete(quote) {
    this.deleteEmitter.emit(quote);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.myQuotes);
  }

}
