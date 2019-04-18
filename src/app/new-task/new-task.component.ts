import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { AppState } from '../store/app.reducers';
import * as TaskActions from './../store/task.actions';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      task: new FormControl('', Validators.required)
    });
  }

  createTask() {
    if (this.taskForm.valid) {
      this.store.dispatch(new TaskActions.AddTask(this.taskForm.get('task').value));
      this.taskForm.setValue({task: ''});
    }
  }

}
