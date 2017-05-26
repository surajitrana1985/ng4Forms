import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './sku-form.component.html',
  styleUrls: ['./sku-form.component.css']
})

export class SkuFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:any) {
    console.log("You have submitted the below information", form);
  }

}
