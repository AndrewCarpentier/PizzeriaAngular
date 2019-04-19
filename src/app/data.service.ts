import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {

  pizzasCommand = [];
  commands = [];
  commandsSubject = new Subject<any>();

  commandPriceSubject = new Subject<any>();

  constructor() { }

  updateCommandPrice = (numberCommand)=>{
    this.commandPriceSubject.next(this.commandPrice(numberCommand));
  }

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

  commandPrice = (numberCommand)=>{
    let price = 0;
    let indexCommand = this.findIndexCommands(numberCommand);
    for(let pizza of this.commands[indexCommand].pizzas){
      price += (pizza.price * pizza.nb);
    }
    return price;
  }

  deletePizzaCommand = (commandNumber, pizzaId)=>{
    let commandIndex = this.findIndexCommands(commandNumber);
    let indexPizza = this.findIndexPizzasCommand(pizzaId, commandIndex);
    this.commands[commandIndex].pizzas.splice(indexPizza, 1)
    this.emitCommands();
    this.commandPrice(commandNumber);
    this.updateCommandPrice(commandNumber);
  }

  findIndexPizzasCommand = (pizzaId, indexCommand)=>{
    return this.commands[indexCommand].pizzas.findIndex((pizza)=>{
      return pizza.id == pizzaId;
    });
  }

  emitCommands = ()=>{
    this.addCommand(this.commands);
    this.commandsSubject.next(this.commands);
  }

  updatePizzaCommand = (numberCommand, pizzaId, nb)=>{
    let indexCommand = this.findIndexCommands(numberCommand);
    let indexPizzas = this.findIndexPizzasCommand(pizzaId, indexCommand);
    this.commands[indexCommand].pizzas[indexPizzas].nb = nb;
    this.emitCommands();
    this.updateCommandPrice(numberCommand);
  }

  findIndexCommands = (commandNumber)=>{
    return this.commands.findIndex((command)=>{
      return command.number == commandNumber;
    })
  }

  buy = (commandNumber)=>{
    let commandIndex = this.findIndexCommands(commandNumber);
    this.commands[commandIndex].payed = true;
    this.emitCommands();
  }

  endCommand = (client)=>{
    let command = {number : this.getLastCommandNumber() + 1, pizzas: this.pizzasCommand, client: client, payed: false };
    this.commands.push(command);
    this.emitCommands();
    this.pizzasCommand = [];
  }

  getCommandById = (id)=>{
    let index = this.commands.findIndex((command)=>{
      return command.number == id;
    });

    return this.commands[index];
  }

  getLastCommandNumber = ()=>{
    return this.commands.length == 0 ? 0 : this.commands[this.commands.length-1].number;
  }

  getCommands = ()=>{
    return this.getLocalStorage('commands');
  }

  addCommand = (command)=>{
    this.SetLocalStorage('commands', command);
  }

  private getLocalStorage = (key)=>{
    return localStorage.getItem(key) == undefined ? [] : JSON.parse(localStorage.getItem(key));
  }

  private SetLocalStorage = (key, object)=>{
    localStorage.setItem(key, JSON.stringify(object));
  }
}
