import { Component, OnInit } from '@angular/core';
import { MyKittensService } from 'src/app/services/my-kittens.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {

  listKitten = [];

  constructor(private _myKittensList: MyKittensService) { }

  ngOnInit() {
    this.listKitten = this._myKittensList.myKittens;
  }

}
