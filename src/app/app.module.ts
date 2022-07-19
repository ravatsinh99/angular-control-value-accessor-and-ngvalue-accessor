import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { QuantityInputComponent } from './quantity-input.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, QuantityInputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
