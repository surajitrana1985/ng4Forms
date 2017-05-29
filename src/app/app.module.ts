import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SkuFormComponent } from './sku-form/sku-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { ValidationFormXComponent } from './validation-form-x/validation-form-x.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuFormComponent,
    ReactiveFormComponent,
    ValidationFormComponent,
    ValidationFormXComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
