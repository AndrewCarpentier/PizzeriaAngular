import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-command',
  templateUrl: './list-command.component.html',
  styleUrls: ['./list-command.component.scss']
})
export class ListCommandComponent implements OnInit {

  commands = [{numero:1, pizzas: [{id:1, name: 'test', description: 'test', price: '5', img: ''}], client: {firstname: 'prenom', lastname: 'nom'}}];

  constructor() { }

  ngOnInit() {
  }

}
