import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-valid-command',
  templateUrl: './valid-command.component.html',
  styleUrls: ['./valid-command.component.scss']
})
export class ValidCommandComponent implements OnInit {

  clientForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      firstname: [],
      lastname: []
    });
  }

  endCommand(){
    console.log(this.clientForm.value)
  }

}
