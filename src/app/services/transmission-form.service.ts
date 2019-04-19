import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransmissionFormService {

  kittenList = [];

  constructor() { }

  addKitten(kitten) {
    this.kittenList.push(kitten);
  }
}
