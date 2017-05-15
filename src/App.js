import React, { Component } from 'react';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';

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

  render() {
    console.log('props from App:' , this.props);

    return <TaskList tasks={this.props.tasks}  onSubmit={this.onCreateCard}/>;
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);


