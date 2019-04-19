import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-list-pizza',
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '55%'
      })),
      state('closed', style({
        width: '0px',
      })),
      transition('open=>closed', [
        animate('1s')
      ]),
      transition('closed=>open', [
        animate('1s')
      ])
    ])
  ],
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {


  pizzas = [{id: 1, name :"4 fromages" , price:5, img:"https://www.dominos.fr/ManagedAssets/FR/product/P4FR/FR_P4FR_fr_hero_2142.png?v2008054620", nb:1},
  {id: 2, name :"4 saisons" , price:4, img:"http://familypizza92.fr/img/p/4/3/43-thickbox_default.jpg",nb:1},
  {id: 3, name :"ananas" , price:6, img:"https://www.dominos.fr/ManagedAssets/FR/product/PHAW/FR_PHAW_fr_hero_2047.png?v458814297",nb:1},
  {id: 4, name :"chevre miel" ,price:9, img:"http://www.pizza-flash27.fr/app_pizza_flash/image/cache/catalog/Pizza%20Fromages/pizzaCmiel-500x500.png",nb:1},
  {id: 5, name :"margarita" ,price:7, img:"https://www.dominos.fr/ManagedAssets/FR/product/PMAR/FR_PMAR_fr_hero_1850.png?v1512997529"},
  {id: 6, name :"reine" ,price:7, img:"https://www.dominos.fr/ManagedAssets/FR/product/PREI/FR_PREI_fr_hero_2142.png?v602644168"},
  {id: 7, name :"fruit de mer" ,price:8, img:"http://allopizza77.fr/172-large_default/fruits-de-mer.jpg"},
  {id: 8, name :"mergez" ,price:9, img:"https://www.dominos.fr/ManagedAssets/FR/product/PSME/FR_PSME_fr_hero_1850.png?v-1959240215"}




]
  
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
