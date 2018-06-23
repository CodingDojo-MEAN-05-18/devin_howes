import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NinjaHandlerService {
  goldCount = 0;
  statusFeed: any = [];

  constructor() { }

  displayGold() {
    console.log(this.goldCount);
    return this.goldCount;
  }

  mineGold(data: string) {
    console.log(`Mining gold from ${data}`);
    if (data === 'farm') {
      const gold: number = this.getRandom(2, 5);
      this.goldCount += gold;
      this.statusFeed.push(`You've earned ${gold} at the ${data}!`);
      console.log(gold, this.goldCount);
    } else if (data === 'cave') {
      const gold: number = this.getRandom(5, 10);
      this.goldCount += gold;
      this.statusFeed.push(`You've earned ${gold} at the ${data}!`);
      console.log(gold, this.goldCount);
    } else if (data === 'house') {
      const gold: number = this.getRandom(7, 15);
      this.goldCount += gold;
      this.statusFeed.push(`You've earned ${gold} at the ${data}!`);
      console.log(gold, this.goldCount);
    } else if (data === 'casino') {
      const gold: number = this.getRandom(-100, 100);
      this.goldCount += gold;
      if (gold < 0) {
        this.statusFeed.push(`You've lost ${gold} at the ${data}! Try Again!`);
      } else {
        this.statusFeed.push(`You've earned ${gold} at the ${data}!`);
      }
      console.log(gold, this.goldCount);
    }
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
  }

}
