import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-valid-command',
  templateUrl: './valid-command.component.html',
  styleUrls: ['./valid-command.component.scss']
})
export class ValidCommandComponent implements OnInit {

  clientForm;
  @Output() closePopUp = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      firstname: [],
      lastname: []
    });
  }

  endCommand(){
    this.service.endCommand(this.clientForm.value);
    this.closePopUp.emit();
  }

}
