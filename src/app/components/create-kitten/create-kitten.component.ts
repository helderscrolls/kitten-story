import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TransmissionFormService } from 'src/app/services/transmission-form.service';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {

  kittenForm: FormGroup;

  constructor(
    private _transmissionForm: TransmissionFormService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
    console.log(this.kittenForm);

  }

  initForm() {
    this.kittenForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      selfie: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this._transmissionForm.addKitten(this.kittenForm.value);
  }
}
