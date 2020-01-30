import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Tuong } from '../hero';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tuongForm: FormControl;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  ngOnInit() {
  }

  createForm() {
    // this.tuongForm = this.fb.group({

    // })
  }

}
