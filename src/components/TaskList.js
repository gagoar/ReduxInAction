import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    );
  }
}

export default TaskList;
