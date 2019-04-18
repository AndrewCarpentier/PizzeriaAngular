import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-command',
  templateUrl: './list-command.component.html',
  styleUrls: ['./list-command.component.scss']
})
export class ListCommandComponent implements OnInit {

  commands;
  @Output() closePopUp = new EventEmitter<any>();

  constructor(private service : DataService) { 
    this.commands = this.service.getCommands();
  }

  ngOnInit() {

  }

  close = ()=>{
    this.closePopUp.emit();
  }

}
