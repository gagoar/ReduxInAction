import axios from 'axios';

let _id = 1;

function uniqueId() {
  return _id++;
}

export function createTask({ title, description }) {
  return {
    type: 'CREATE_TASK',
    payload: {
      id: uniqueId(),
      title,
      description
    }
  }
}


export function editTask(id, params) {
 return {
   type: 'EDIT_TASK',
   payload: {
     id,
     params
   }
 }
}

export function fetchTasksSucceeded(tasks) {
  return {
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: {
      tasks
    }
  }
}

export function fetchTasks() {
  return dispatch => {  //#B
    axios.get('http://localhost:3001/tasks')
      .then(resp => {
        dispatch(fetchTasksSucceeded(resp.data));
      });
  }
}
