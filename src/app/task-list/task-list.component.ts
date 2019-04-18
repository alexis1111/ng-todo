import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Task } from '../store/task.reducers';
import { AppState } from '../store/app.reducers';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskListState: Observable<{tasks: Task[]}>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.taskListState = this.store.select('tasks');
  }
}
