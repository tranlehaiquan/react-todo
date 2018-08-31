import React, {Component} from 'react';
import TodoTaskItem from './TodoTaskItem'

export default class TodoTasks extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => 
      <TodoTaskItem task={task.label} key={task.id}></TodoTaskItem>
    )
  }

  render() {
    return(
      <ul className="todo-list">
        { this.renderTasks() }
      </ul>
    )
  }
}