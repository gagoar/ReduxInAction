import React, { Component } from 'react';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import { createTask, editTask } from './actions';

class App extends Component {
  onCreateCard({ title, description }) {
    this.props.dispatch({
      type: 'CREATE_TASK',
      payload: {
        title,
        description
      }
    });
  }

  onStatusChange(id, status) {
      this.props.dispatch(editTask(id, { status }));
  }

  onCreateTask({ title, description }) {
    this.props.dispatch(createTask({ title, description }));
  }

  render() {
      console.log('props from App:' , this.props);

      return (
          <div className="main-content">

              <TaskList
                  tasks={this.props.tasks}
                  onSubmit={this.onCreateCard.bind(this)}
                  onStatusChange={this.onStatusChange.bind(this)}
              />
          </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state
  }
}

export default connect(mapStateToProps)(App);

