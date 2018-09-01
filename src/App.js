import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader'
import TodoCounter from './components/TodoCounter'
import TodoTasks from './components/TodoTasks'
import TodoFilters from './components/TodoFilters'
import uuid from 'uuid'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      filters: ''
    }
  }

  makeAllTaskCompleted = () => {
    console.log('make all task completed')
  }

  createTask = (label) => {
    const task = {
      label,
      id: uuid.v4(),
      state: ''
    }

    this.setState((preState) => ({
      tasks: preState.tasks.concat(task)
    }))
  }

  deletedTask = (taskID) => {
    this.setState((preState) => ({
      tasks: preState.tasks.filter((task) => task.id !== taskID)
    }))
  }

  filterItems = (state) => {
    return this.state.tasks.filter((task) => {
      return task.state === state
    })
  }

  updateTask = (taskEdited) => {
    this.setState((preState) => ({
      task: preState.map((task) => {
        if (task.id !== taskEdited) return task;
        return taskEdited;
      })
    }))
  }

  render() {
    const itemsActive = this.filterItems('');
    const itemsCompleted = this.filterItems('completed');

    return (
      <div className="App">
        <section className="todoapp">
          <TodoHeader createTask={this.createTask}></TodoHeader>
          <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <TodoTasks 
              tasks={this.state.tasks}
              deletedTask={this.deletedTask}
              updateTask={this.updateTask}
            >
            </TodoTasks>
          </section>
          <footer className="footer">
            <TodoCounter itemsLeft={itemsActive.length}></TodoCounter>
            <TodoFilters></TodoFilters>
            <button onClick={this.makeAllTaskCompleted} className="clear-completed">Clear completed</button>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
