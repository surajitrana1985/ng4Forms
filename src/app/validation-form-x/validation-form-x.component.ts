import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-form-x',
  templateUrl: './validation-form-x.component.html',
  styleUrls: ['./validation-form-x.component.css']
})
export class ValidationFormXComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb:FormBuilder) { 
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'ssn': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit (form) {
    console.log("User has input the value as ", form);
  }

  SSNValidator (form:FormControl): StringMap<String, boolean> {
    return null;
  }

}
