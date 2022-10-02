import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import todo from 'src/app/model/todo.model';
import { Add, Remove, Toggle } from 'src/app/store/todo.action';
import { selectTodos } from 'src/app/store/todo.selector';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  newToDo: string = '';
  todos$: Observable<ReadonlyArray<todo>> | undefined;

  constructor(public store: Store) {
  }

  ngOnInit(): void {
    this.todos$ = this.store.select(selectTodos);
  }

  addTodo() {
    this.store.dispatch(Add({ text: this.newToDo || 'Unknown' }));
    this.newToDo = '';
  }

  remove(id:string) {
    this.store.dispatch(Remove({id}))
  }

  toggle(id: string) {
    this.store.dispatch(Toggle({id}));
  }
}
