import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import todo from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Output() onRemoveTodo = new EventEmitter<string>();
  @Output() onToggleTodo = new EventEmitter<string>();

  @Input() todo!: todo;



  removeTodo() {
    this.onRemoveTodo.emit(this.todo.id);
  }

  toggleTodo() {
    this.onToggleTodo.emit(this.todo.id);
  }
}
