import React, {Component} from 'react';
import TodoTaskItem from './TodoTaskItem'

export default class TodoTasks extends Component {
  renderTasks = () => {
    return this.props.tasks.map((task) => 
      <TodoTaskItem 
        task={task} 
        key={task.id}
        deletedTask={this.props.deletedTask}
        updateTask={this.props.updateTask}
      >
      </TodoTaskItem>
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