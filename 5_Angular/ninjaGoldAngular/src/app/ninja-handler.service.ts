import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NinjaHandlerService {
  goldCount = 0;

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
      console.log(gold, this.goldCount);
    } else if (data === 'cave') {
      const gold: number = this.getRandom(5, 10);
      this.goldCount += gold;
      console.log(gold, this.goldCount);
    } else if (data === 'house') {
      const gold: number = this.getRandom(7, 15);
      this.goldCount += gold;
      console.log(gold, this.goldCount);
    } else if (data === 'casino') {
      const gold: number = this.getRandom(-100, 100);
      this.goldCount += gold;
      console.log(gold, this.goldCount);
    }
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
  }

}
