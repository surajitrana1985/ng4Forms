import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm:FormGroup;

  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'sku': ['Dummy Value']
    });
  }

  ngOnInit() {
  }

  onSubmit(form:any) {
    console.log("Value parsed from Reactive form is ", form);
  }

}
