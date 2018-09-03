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
      filter: ''
    }
  }

  makeAllTaskCompleted = () => {
  }

  createTask = (label) => {
    const task = {
      label,
      id: uuid.v4(),
      state: 'active'
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

  updateTask = (taskEdited) => {
    this.setState((preState) => ({
      tasks: preState.tasks.map((task) => {
        if (task.id !== taskEdited.id) return task;
        return taskEdited;
      })
    }))
  }

  changeFilter = (filterState) => {
    this.setState((preState) => ({
      filter: filterState
    }))
  }

  // predicate is function 
  isState = (filterState) => ({state}) => filterState === state

  render() {
    const {filter} = this.state;
    let tasks = filter ? this.state.tasks.filter(this.isState(filter)) : this.state.tasks;

    return (
      <div className="App">
        <section className="todoapp">
          <TodoHeader createTask={this.createTask}></TodoHeader>
          <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <TodoTasks 
              tasks={tasks}
              deletedTask={this.deletedTask}
              updateTask={this.updateTask}
            >
            </TodoTasks>
          </section>
          <footer className="footer">
            <TodoCounter itemsLeft={tasks.length}></TodoCounter>
            <TodoFilters
              currentfilterState={this.state.filter} 
              changeFilter={this.changeFilter}
            >
            </TodoFilters>
            <button
              onClick={this.makeAllTaskCompleted} 
              className="clear-completed"
            >
              Clear completed
            </button>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
