import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent implements OnInit {

  myForm: FormGroup;
  sku:AbstractControl;

  constructor(fb:FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit (form) {
    console.log("User has input the value as ", form);
  }

}
