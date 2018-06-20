import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  alphaNumbers: number[] = [];
  betaNumbers: number[] = [];
  alphaSum = 0;
  betaSum = 0;

  constructor() { }

  retrieveAlpha(): number[] {
    return this.alphaNumbers;
  }

  retrieveBeta(): number[] {
    return this.betaNumbers;
  }

  randomAlpha(): number[] {
    const random: number = Math.floor(Math.random() * 11);
    this.alphaNumbers.push(random);
    return this.alphaNumbers;
  }

  randomBeta(): number[] {
    const random: number = Math.floor(Math.random() * 11);
    this.betaNumbers.push(random);
    return this.betaNumbers;
  }

  getDifference(): number {
    for (let i = 0; i < this.alphaNumbers.length; i++) {
      this.alphaSum = this.alphaNumbers[i] + this.alphaSum;
    }

    for (let i = 0; i < this.betaNumbers.length; i++) {
      this.betaSum = this.betaNumbers[i] + this.betaSum;
    }

    const differential: number = this.alphaSum - this.betaSum;
    this.alphaSum = 0;
    this.betaSum = 0;
    console.log(differential);
    return differential;
  }
}
