import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskComponent } from './new-task.component';
import { Store } from '@ngrx/store';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as TaskActions from './../store/task.actions';

class StoreMock {
  dispatch() {}
}

describe('New Task Component', () => {
  let component: NewTaskComponent;
  let fixture: ComponentFixture<NewTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskComponent ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: Store,
          useClass: StoreMock
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(NewTaskComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set task form on init', () => {
    component.ngOnInit();

    expect(component.taskForm instanceof FormGroup).toBe(true);
  });

  it('should create a task succesfully', () => {
    const storeMock = TestBed.get(Store);
    const spyDispatch = spyOn(storeMock, 'dispatch');

    component.ngOnInit();

    component.taskForm.setValue({task: 'test'});

    component.createTask();

    expect(spyDispatch).toHaveBeenCalledWith(
      new TaskActions.AddTask('test')
    );
  });

  it('should not create a task if the form is invalid', () => {
    const storeMock = TestBed.get(Store);
    const spyDispatch = spyOn(storeMock, 'dispatch');

    component.ngOnInit();

    component.createTask();

    expect(spyDispatch).toHaveBeenCalledTimes(0);
  });
});
