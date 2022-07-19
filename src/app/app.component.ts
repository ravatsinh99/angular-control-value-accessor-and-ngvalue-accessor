import { Component, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quantity = 10;

  numberForm: FormGroup = this.formBuilder.group({
    numberValue: [null, [Validators.required]],
  });

  myNumber:number;
  get numberControls() {
    return this.numberForm.controls;
  }
  constructor(private formBuilder: FormBuilder) {}

  saveData() {
    if (this.numberForm.invalid) {
      this.numberForm.markAllAsTouched();
      return;
    }
    console.log('Form Value', this.numberForm.value);
  }
}
