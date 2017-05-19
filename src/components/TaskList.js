import React, { Component } from 'react';
import Task from '../components/Task';

const style = {};

const formStyle = {};

class TaskList extends Component {
 constructor(props) {
   super(props);
   this.state = {
     showNewCardForm: false,
     title: '',
     description: '',
   };
 }

 onTitleChange = (e) => {
   this.setState({ title: e.target.value });
 }

 onDescriptionChange = (e) => {
   this.setState({ description: e.target.value });
 }

 onSubmit = (e) => {
     e.preventDefault();

     this.props.onSubmit({
         title: this.state.title,
         description: this.state.description,
     });

     this.setState({
         showNewTaskForm: false,
         title: '',
         description: '',
     });
 }

 render() {
   return (
     <div style={style.cards}>
       <div style={style.newCard}>
         <span
           style={style.newCardText}
           onClick={() => this.setState({ showNewTaskForm: true })}
         >
           + New card
         </span>
       </div>
       {this.state.showNewTaskForm && (
         <form onSubmit={this.onSubmit.bind(this)}>
           <input onChange={this.onTitleChange} value={this.state.title} style={formStyle.formControlFullWidth} type="text" placeholder="title" />
           <input onChange={this.onDescriptionChange} value={this.state.subscription} style={formStyle.formControlFullWidth} type="text" placeholder="description" />
           <button
             style={{marginBottom: '10px'}}
             type="submit"
           >
             Save
           </button>
         </form>
       )}
       {this.props.tasks.map(task => (
           <Task
               key={task.title}
               task={task}
               onStatusChange={this.props.onStatusChange}
           />
       ))}
     </div>
   );
 }
}

export default TaskList;
