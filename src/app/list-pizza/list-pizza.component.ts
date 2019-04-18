import { Component, OnInit } from '@angular/core';
import { PizzaComponent } from '../pizza/pizza.component';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {


  pizzas = [{id: 1, name :"4 fromages" , description:" description de la pizza fromages ", price:"5€", img:"https://www.dominos.fr/ManagedAssets/FR/product/P4FR/FR_P4FR_fr_hero_2142.png?v2008054620"},
  {id: 1, name :"4 fromages" , description:" description de la pizza fromages ", price:"5€", img:"https://www.dominos.fr/ManagedAssets/FR/product/P4FR/FR_P4FR_fr_hero_2142.png?v2008054620"}]
  
  constructor() { }

  ngOnInit() {
  }

}
