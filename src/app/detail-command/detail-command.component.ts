import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail-command',
  templateUrl: './detail-command.component.html',
  styleUrls: ['./detail-command.component.scss']
})
export class DetailCommandComponent implements OnInit {

  command;

  constructor(private route: ActivatedRoute, private service: DataService) {
    this.service.commands = this.service.getCommands();

    let id = this.route.snapshot.paramMap.get("id")
    this.command = this.service.getCommandById(id);
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id")
    this.command = this.service.getCommandById(id);
  }

}
