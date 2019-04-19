import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-command',
  templateUrl: './list-command.component.html',
  styleUrls: ['./list-command.component.scss']
})
export class ListCommandComponent implements OnInit {

  commands;
  @Output() closePopUp = new EventEmitter<any>();

  constructor(private service : DataService, private route : Router) { 
    this.commands = this.service.getCommands();
  }

  ngOnInit() {
    this.service.commandsSubject.subscribe((newCommands)=>{
      this.commands = newCommands;
    })
  }

  router = (e)=>{
    this.route.navigate(["/command/" + e.target.value])
  }

  close = ()=>{
    this.closePopUp.emit();
  }

}
