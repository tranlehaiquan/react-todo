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
      tasks: [
        {
          label: 'Task 1',
          id: uuid.v4(),
          state: ''
        },
        {
          label: 'Task 2',
          id: uuid.v4(),
          state: ''
        },
        {
          label: 'Task 3',
          id: uuid.v4(),
          state: ''
        },
      ],
      filters: 'all'
    }
  }

  makeAllTaskCompleted() {
    console.log('make all task completed')
  }

  createTask(label) {
    const task = {
      label,
      id: uuid,
      state: ''
    }

    this.setState((preState, props) => ({
      tasks: 
    }))
  }

  render() {
    return (
      <div className="App">
        <section className="todoapp">
          <TodoHeader></TodoHeader>
          <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <TodoTasks tasks={this.state.tasks}></TodoTasks>
          </section>
          <footer className="footer">
            <TodoCounter></TodoCounter>
            <TodoFilters></TodoFilters>
            <button onClick={this.makeAllTaskCompleted} className="clear-completed">Clear completed</button>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
