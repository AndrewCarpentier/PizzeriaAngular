import { Component, OnInit, Input,Output} from '@angular/core';
import { DataService } from '../data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {


@Input() pizzaIn;
@Output() PizzaOut : {id, name, description, price, img, nb};

@Output() alert = new EventEmitter<any>();


add()
{
  this.service.addPizzaCommand(this.pizzaIn);
  this.alert.emit(this.pizzaIn);

};

  constructor(private service : DataService)
   { 


   }

  ngOnInit() {
  }

}
