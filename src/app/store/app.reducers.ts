import { TaskState, taskReducer } from './task.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  tasks: TaskState;
}

export const reducers: ActionReducerMap<AppState> = {
  tasks: taskReducer
};
