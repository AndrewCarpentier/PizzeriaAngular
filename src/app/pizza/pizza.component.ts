import { Component, OnInit, Input,Output } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {


@Input() pizzaIn;
@Output() PizzaOut : {id, name, description, price, img, nb};



  constructor() { }

  ngOnInit() {
  }

}
