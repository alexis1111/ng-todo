import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { TaskItemComponent } from './task-item.component';
import * as TaskActions from './../../store/task.actions';

class StoreMock {
  dispatch() {}
}

describe('Task Item Component', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskItemComponent ],
      providers: [
        {
          provide: Store,
          useClass: StoreMock
        }
      ]
    });

    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should complete a task', () => {
    const storeMock = TestBed.get(Store);
    const spyDispatch = spyOn(storeMock, 'dispatch');

    component.index = 1;
    component.taskCompleted();

    expect(spyDispatch).toHaveBeenCalledWith(
      new TaskActions.CompleteTask(1)
    );
  });

  it('should delete a task', () => {
    const storeMock = TestBed.get(Store);
    const spyDispatch = spyOn(storeMock, 'dispatch');

    component.index = 1;
    component.deleteTask();

    expect(spyDispatch).toHaveBeenCalledWith(
      new TaskActions.DeleteTask(1)
    );
  });
});
