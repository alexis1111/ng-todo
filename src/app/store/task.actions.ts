import { Action } from '@ngrx/store';

export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: string) {}
}

export class CompleteTask implements Action {
  readonly type = COMPLETE_TASK;

  constructor(public payload: number) {}
}

export class DeleteTask implements Action {
  readonly type = DELETE_TASK;

  constructor(public payload: number) {}
}

export type TaskActions = AddTask | CompleteTask | DeleteTask;
