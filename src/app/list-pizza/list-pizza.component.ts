import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {


  pizzas = [{id: 1, name :"4 fromages" , price:5, img:"https://www.dominos.fr/ManagedAssets/FR/product/P4FR/FR_P4FR_fr_hero_2142.png?v2008054620", nb:1},
  {id: 2, name :"4 saisons" , price:4, img:"http://familypizza92.fr/img/p/4/3/43-thickbox_default.jpg",nb:1},
  {id: 3, name :"ananas" , price:6, img:"https://www.dominos.fr/ManagedAssets/FR/product/PHAW/FR_PHAW_fr_hero_2047.png?v458814297",nb:1},
  {id: 4, name :"chevre miel" ,price:9, img:"http://www.pizza-flash27.fr/app_pizza_flash/image/cache/catalog/Pizza%20Fromages/pizzaCmiel-500x500.png",nb:1}]
  
  displayAlert = false;

  pizzaName;
  validCommand = false;
  displayCommands = false;
  
  constructor(private service : DataService) { 
    this.service.commands = this.service.getCommands();
  }

  ngOnInit() {
  }

  alertDisplay = (pizza)=>{
    this.pizzaName = pizza.name;
    this.displayAlert = true;
    setTimeout(() => {
      this.displayAlert = false;
    }, 1000);
  }

  validate = ()=>{
    this.validCommand = !this.validCommand;
  }

  display = ()=>{
    this.displayCommands = !this.displayCommands;
  }

}
