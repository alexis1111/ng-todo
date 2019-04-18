import * as TaskActions from './task.actions';

export interface Task {
  description: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    {
      description: 'Watch Voyager again',
      completed: false
    },
    {
      description: 'Watch Enterprise again',
      completed: false
    },
    {
      description: 'Forget that Discovery exists',
      completed: false
    }
  ]
};

export function taskReducer(state = initialState, action: TaskActions.TaskActions) {
  switch (action.type) {
    case TaskActions.ADD_TASK:
      const newTask = {
        description: action.payload,
        completed: false
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask]
      };

    case TaskActions.COMPLETE_TASK:
      const task = state.tasks[action.payload];

      const updatedTask = Object.assign(task, {
        completed: true
      });
      const taskList = [...state.tasks];
      taskList[action.payload] = updatedTask;

      return {
        ...state,
        tasks: taskList
      };

    case TaskActions.DELETE_TASK:
      const updatedTasks = [...state.tasks];

      updatedTasks.splice(action.payload, 1);

      return {
        ...state,
        tasks: updatedTasks
      };

    default:
      return state;
  }
}
