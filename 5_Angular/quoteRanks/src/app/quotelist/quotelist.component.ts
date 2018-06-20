import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit, OnChanges {
  @Input() myQuotes: Quote[];
  title = 'All Quotes';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.myQuotes);
  }

}
