import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit, OnChanges {
  @Input() myQuotes: Quote[];
  @Output() voteUpEmitter = new EventEmitter();
  @Output() voteDownEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();

  title = 'All Quotes';
  constructor() { }

  upVote() {
    this.voteUpEmitter.emit(this.myQuotes);
  }

  downVote() {
    this.voteDownEmitter.emit('Vote Down!');
  }

  delete() {
    this.deleteEmitter.emit('Delete!');
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.myQuotes);
  }

}
