import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubScoreService {
  user: any = [];
  userScore: number;

  constructor(private _http: HttpClient) { }

  findUser(userName) {
    this._http.get(`https://api.github.com/users/${userName}`)
    .subscribe(
      (response) => {
        console.log(`Found User ${userName}`, response);
        // Assign all the values
        this.user = response;
        const repos: number = this.user.public_repos;
        const followers: number = this.user.followers;
        // Log to ensure data is correctly received and assigned
        console.log(`${userName} has ${repos} repositories and ${followers} followers!`);
        this.calculateScore(repos, followers);
      },
      (error) => {
        console.log(`Error! ${userName} not found!`, error);
      }
    );
  }

  calculateScore(repos: number, followers: number) {
    this.userScore = repos + followers;
    console.log(`User Score: ${this.userScore}`);
    return this.userScore;
  }

  displayScore() {
    let statusMessage;
    const score = this.userScore;

    if (score < 20) {
      statusMessage = 'Needs Work';
    } else if (score < 50) {
      statusMessage = 'A decent start!';
    } else if (score < 100) {
      statusMessage = 'Doing good!';
    } else if (score < 200) {
      statusMessage = 'Great job!';
    } else if (score >= 200) {
      statusMessage = 'Github Elite!';
    }
    return [score, statusMessage];
  }
}
