import { Component, OnInit } from '@angular/core';
import { GithubScoreService } from '../github-score.service';

@Component({
  selector: 'app-score-form',
  templateUrl: './score-form.component.html',
  styleUrls: ['./score-form.component.css']
})
export class ScoreFormComponent implements OnInit {

  constructor(private _githubScore: GithubScoreService) { }

  ngOnInit() {
  }

  findUser(data) {
    console.log('Clicked button. Looking for: ', data);
    this._githubScore.findUser(data);
  }

}
