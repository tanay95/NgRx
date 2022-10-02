import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from '../store/todo.reducer';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodolistComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(fromTodos.featureKey, fromTodos.todoreducer)
  ],
  exports: [
    TodolistComponent
  ]
})
export class TodoModule { }
