import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubScoreService {
  user: any = [];

  constructor(private _http: HttpClient) { }

  findUser(userName) {
    this._http.get(`https://api.github.com/users/${userName}`)
    .subscribe(
      (response) => {
        console.log(`Found User ${userName}`, response);
        this.user = response;
      },
      (error) => {
        console.log(`Error! ${userName} not found!`, error);
      }
    );
  }

  calculateScore() {
    console.log('Calculate Score Method');
  }
}
