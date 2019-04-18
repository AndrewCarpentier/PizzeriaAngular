import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListPizzaComponent } from './list-pizza/list-pizza.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DetailCommandComponent } from './detail-command/detail-command.component';
import { ListCommandComponent } from './list-command/list-command.component';
import { ValidCommandComponent } from './valid-command/valid-command.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';

const routes : Routes = [
  {path: '', component: ListPizzaComponent},
  {path: 'command:id', component: DetailCommandComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListPizzaComponent,
    PizzaComponent,
    DetailCommandComponent,
    ListCommandComponent,
    ValidCommandComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
