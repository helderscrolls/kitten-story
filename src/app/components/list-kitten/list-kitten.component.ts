import { Component, OnInit } from '@angular/core';
import { TransmissionFormService } from 'src/app/services/transmission-form.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {

  listKitten = [];

  constructor(private _transmissionForm: TransmissionFormService) { }

  ngOnInit() {
    this.listKitten = this._transmissionForm.kittenList;
  }

}
