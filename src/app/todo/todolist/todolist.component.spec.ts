import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockStore,provideMockStore } from '@ngrx/store/testing';
import { Add, Remove, Toggle } from 'src/app/store/todo.action';
import { todoListState,intialTodoState } from '../../store/todo.state'

import { TodolistComponent } from './todolist.component';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;
  let store: MockStore<todoListState>;

  beforeEach(waitForAsync( () => {
     TestBed.configureTestingModule({
      declarations: [ TodolistComponent ],
      imports : [
        FormsModule
      ],
      providers: [
        provideMockStore({
          initialState : {...intialTodoState}
        })
      ]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    /* fixture = TestBed.createComponent(TodolistComponent); */
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the item in to do list',() => {
    spyOn(component.store,"dispatch");
    
    fixture.detectChanges();
    component.newToDo = "test"
    component.addTodo();

    expect(store.dispatch).toHaveBeenCalledWith(Add({text: "test"}));
    expect(component.newToDo).toEqual('');
  })

  it('should remove item from to do list', () => {
    spyOn(component.store,"dispatch");
    component.remove("1")
    expect(store.dispatch).toHaveBeenCalledWith(Remove({id:"1"}));
  })

  it('should toggle item from todo list',() => {
    spyOn(component.store,"dispatch");
    component.toggle('1');
    expect(store.dispatch).toHaveBeenCalledWith(Toggle({id:"1"}))
  })
});
