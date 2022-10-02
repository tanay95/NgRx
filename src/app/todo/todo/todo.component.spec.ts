import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove to do list item',() => {
    spyOn(component.onRemoveTodo,'emit');
    component.todo = {id:"1",description:"test",status:false}
    component.removeTodo();

    expect(component.onRemoveTodo.emit).toHaveBeenCalledWith("1");
  })

  it('should toggle list element in to do list',() => {
    spyOn(component.onToggleTodo,'emit');
    component.todo = {id:"1",description:"test",status:false}
    component.toggleTodo();
    expect(component.onToggleTodo.emit).toHaveBeenCalledWith('1');
  })
  
});
