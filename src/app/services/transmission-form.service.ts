import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransmissionFormService {

  kittenList = [];
  myKittensList = [];

  constructor() { }

  /*
    Recovers data from the Form and adds it to an global Array.
  */
  addKitten(kitten) {
    this.kittenList.push(kitten);
  }

  /*
    Recovers and delete data from main Array into My Kittens array.
  */
  adoptkitten(kitten, index) {
    this.kittenList.splice(index, 1);
    this.myKittensList.push(kitten);
  }
}
