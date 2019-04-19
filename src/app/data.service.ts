import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {

  pizzasCommand = [];
  commands = [];
  commandsSubject = new Subject<any>();

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

  endCommand = (client)=>{
    let command = {number : this.getLastCommandNumber() + 1, pizzas: this.pizzasCommand, client: client, payed: false };
    this.commands.push(command);
    this.addCommand(this.commands);
    this.commandsSubject.next(this.commands);
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
