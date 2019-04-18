import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  pizzasCommand = [];
  commands = [];

  constructor() { }

  addPizzaCommand(pizza) {
    console.log(pizza);
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
    
    console.log(this.pizzasCommand);



  }

}
