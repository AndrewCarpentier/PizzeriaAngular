import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail-command',
  templateUrl: './detail-command.component.html',
  styleUrls: ['./detail-command.component.scss']
})
export class DetailCommandComponent implements OnInit {

  command;
  totalPrice = 0;

  constructor(private route: ActivatedRoute, private service: DataService, private router: Router) {
    this.service.commands = this.service.getCommands();

    let id = this.route.snapshot.paramMap.get("id")
    this.command = this.service.getCommandById(id);
    this.totalPrice = this.service.commandPrice(this.command.number);
    console.log(this.command.payed)
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id")
    this.command = this.service.getCommandById(id);
    this.service.commandPriceSubject.subscribe((newPrice)=>{
      this.totalPrice = newPrice;
    })
  }

  buy = ()=>{
    this.service.buy(this.command.number);
    this.router.navigate(["/"]);
  }

}
