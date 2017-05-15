import React, { Component } from 'react';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';

class App extends Component {
 render() {
   return <TaskList tasks={this.props.tasks} />;
 }
}

debugger;
function mapStateToProps(state) {
 return {
   tasks: state.tasks
 }
}

export default connect(mapStateToProps)(App);


