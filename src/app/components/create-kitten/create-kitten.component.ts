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
    private transmissionFormService: TransmissionFormService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  /*
    Function to start new form
  */
  initForm() {
    this.kittenForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      selfie: new FormControl('', [Validators.required]),
    });
  }

  /*
    Function to send the form data into the array (onclick)
  */
  onSubmit() {
    this.transmissionFormService.addKitten(this.kittenForm.value);
  }
}
