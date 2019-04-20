import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyKittensService {

  myKittens = [];

  constructor() { }

  addMyKittens(kitten) {
    this.myKittens.push(kitten);
  }
}
