import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Task } from 'src/app/store/task.reducers';
import { AppState } from 'src/app/store/app.reducers';
import * as TaskActions from './../../store/task.actions';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() data: Task;
  @Input() index: number;

  constructor(
    private store: Store<AppState>
  ) { }

  taskCompleted() {
    this.store.dispatch(new TaskActions.CompleteTask(this.index));
  }

  deleteTask() {
    this.store.dispatch(new TaskActions.DeleteTask(this.index));
  }
}
