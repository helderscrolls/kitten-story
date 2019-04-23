import { Component, OnInit } from '@angular/core';
import { TransmissionFormService } from 'src/app/services/transmission-form.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})

export class ListKittenComponent implements OnInit {

  listKitten = [];

  constructor(
    private transmissionFormService: TransmissionFormService,

  ) { }

  /*
      Acquires form data to fill the card
  */
  ngOnInit() {
    this.listKitten = this.transmissionFormService.kittenList;
  }


  /*
    Transfers card from main array into My Kittens array
  */
  adoptkitten(kitten, index) {
    this.transmissionFormService.adoptkitten(kitten, index);
  };
}
