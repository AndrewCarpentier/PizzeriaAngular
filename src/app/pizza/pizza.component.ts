import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {


  @Input() pizzaIn;
  @Input() commandNumber;
  @Input() listPizza = true;
  @Output() alert = new EventEmitter<any>();

  displayHover = false;

  addHover() {
    this.displayHover = true;
  }

  removeHover() {
    this.displayHover = false;
  }

  add() {
    this.service.addPizzaCommand(this.pizzaIn);
    this.alert.emit(this.pizzaIn);
  };

  constructor(private service: DataService) {
  }

  ngOnInit() {
  }

  update = (e)=>{
    this.service.updatePizzaCommand(this.commandNumber, e.target.getAttribute('name'), e.target.value);
  }

}
