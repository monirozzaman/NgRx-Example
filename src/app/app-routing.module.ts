import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VoteComponent} from './todo/components/vote/vote.component';
import {VoteResultComponent} from './todo/components/vote-result/vote-result.component';
import {TodosComponent} from './todo/components/todos/todos.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: '' , component: VoteComponent },
  { path: 'result' , component: VoteResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
