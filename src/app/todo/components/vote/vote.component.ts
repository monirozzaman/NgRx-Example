import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Todo} from 'app/todo/models/todo';

import * as todo from 'app/todo/actions/todo';
import * as fromTodos from 'app/todo/reducers/todos';
import {BackendService} from '../../services/backend.service';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteComponent implements OnInit {
  /**
   * Observable list of todo
   */
  todos: Observable<Todo[]>;
  @Input() data: Todo[];
  voteListForChittagong = new Array<Todo>();
  voteListForDhaka = new Array<Todo>();

  constructor(private store: Store<fromTodos.State>, private backendService: BackendService) {
    this.todos = store.select(fromTodos.getTodosAll);

  }

  ngOnInit() {
    // subscribe to receive selected todo
    this.store.select(fromTodos.getSelectedTodo).subscribe(todo => {
      if (!todo) {
        return;
      }
    });
  }

  /**
   * Submit the form
   * @param { value, valid }: { value: Todo, valid: boolean }
   */
  vote(symbol: string): void {
    const value: any = {
      id: '',
      symbol: symbol,
      complete: ''
    };
    this.store.dispatch(new todo.Save(value));
  }

  showDate(): void {

    this.todos.subscribe(res => {

      res.forEach(todo => {
        this.backendService.addTotalVote(todo.symbol, todo.complete).subscribe();
      });
    });
  }
}
