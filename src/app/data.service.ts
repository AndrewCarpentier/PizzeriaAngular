import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  pizzasCommand = [];
  commands = [];

  constructor() { }

  addPizzaCommand(pizza) {
let find=false;
    for (let p of this.pizzasCommand) {
      if (pizza.id == p.id) {
        p.nb++
        find=true;
      }

    }
    if(!find){

      this.pizzasCommand.push({ ...pizza, nb: 1 });
    }
  }

}
