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
