import { Component, OnInit, DoCheck } from '@angular/core';
import { GithubScoreService } from '../github-score.service';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent implements OnInit, DoCheck {
  userScore: any;
  statusMessage: string;

  constructor(private _githubScore: GithubScoreService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.userScore = this._githubScore.displayScore()[0];
    this.statusMessage = this._githubScore.displayScore()[1];
  }

}
