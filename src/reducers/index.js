const initialState = [
 {
   id: 1,
   title: 'Learn Redux',
   description: 'The store, actions, and reducers, oh my!',
   status: 'In Progress',
 },
 {
   id: 2,
   title: 'Peace on Earth',
   description: 'No big deal.',
   status: 'In Progress',
 },
];

export default function tasks(state = initialState, action) {
    if (action.type === 'CREATE_TASK') {
        return state.concat(action.payload);
    }

    if (action.type === 'EDIT_TASK') {
        const { payload } = action;

        return state.map(task => {
            if (task.id === payload.id) {
                return {
                    ...task,
                    ...payload.params
                }
            }

            return task;
        })
    }
    return state;
}

