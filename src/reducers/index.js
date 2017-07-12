export default function tasks(state = [], action) {
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

    if (action.type === 'FETCH_TASKS_SUCCEEDED') {
        return action.payload;
    }

    return state;
}
