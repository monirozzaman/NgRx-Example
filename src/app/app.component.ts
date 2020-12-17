import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Todo} from 'app/todo/models/todo';

import * as todo from 'app/todo/actions/todo';
import * as fromTodos from 'app/todo/reducers/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  /**
   * Observable list of todo
   */
  todos: Observable<Todo[]>;
  constructor(private store: Store<fromTodos.State>) {
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
  onSubmit(): void {
    const valu: any = {
      id: '',
      symbol: '4324f',
      complete: ''
    };
    console.log(valu);

    this.store.dispatch(new todo.Save(valu));


  }

}
