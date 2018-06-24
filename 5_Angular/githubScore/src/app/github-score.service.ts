import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubScoreService {
  user: any = [];

  constructor(private _http: HttpClient) { }

  findUser() {
    // hard coded username for initial dev remove and add userName as param
    const userName: string = 'dphowes';

    this._http.get(`https://api.github.com/users/${userName}`)
    .subscribe(
      (response) => {
        console.log('Sucess!', response);
        this.user = response;
      },
      (error) => {
        console.log('Error!', error);
      }
    );
  }
}
