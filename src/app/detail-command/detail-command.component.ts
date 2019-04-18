import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-command',
  templateUrl: './detail-command.component.html',
  styleUrls: ['./detail-command.component.scss']
})
export class DetailCommandComponent implements OnInit {

  command = {id: 1, pizzas: [{id:1, name: 'test', description: 'test', price: '5', img: ''}], client: {firstname: 'prenom', lastname: 'nom'}}
  
  constructor() { }

  ngOnInit() {
  }

}
