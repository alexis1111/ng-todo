import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';

import { TaskListComponent } from './task-list.component';

class StoreMock {
  select() {}
}

describe('Task List Component', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListComponent ],
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

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get the list of task from the store', () => {
    const storeMock = TestBed.get(Store);
    const spySelect = spyOn(storeMock, 'select');

    component.ngOnInit();

    expect(spySelect).toHaveBeenCalledWith('tasks');
  });
});
