import { Component, OnInit } from '@angular/core';
import { TransmissionFormService } from 'src/app/services/transmission-form.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {

  listKitten = [];

  constructor(private _transmissionForm: TransmissionFormService) { }

  ngOnInit() {
    this.listKitten = this._transmissionForm.kittenList;
  }

}
