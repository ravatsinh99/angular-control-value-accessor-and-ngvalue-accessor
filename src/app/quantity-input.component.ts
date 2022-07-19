import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QuantityInputComponent),
    multi: true,
  }],
})
export class QuantityInputComponent implements ControlValueAccessor {
  value: number;

  disabled = false;

  private valueChanges = new Subject<number>();

  private touches = new Subject();

  registerOnChange(fn: any) {
    this.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.touches.subscribe(fn);
  }

  setDisabledState(isDisabled?: boolean) {
    this.disabled = isDisabled;
  }

  writeValue(value: number) {
    this.value = value;
  }

  updateValue(value: number) {
    this.value = value;
    this.valueChanges.next(value);
  }

  touch() {
    this.touches.next('');
  }
}