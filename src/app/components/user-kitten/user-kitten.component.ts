import { Component, OnInit } from '@angular/core';
import { TransmissionFormService } from 'src/app/services/transmission-form.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {

  myKittensList = [];

  constructor(private transmissionFormList: TransmissionFormService) { }

  /*
    Recover data from service to generate the card on My Kittens
  */
  ngOnInit() {
    this.myKittensList = this.transmissionFormList.myKittensList;
  }

}
