import React, { Component } from 'react';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
  }

  handleInputOnchange = (event) => {
    this.setState({
      task: event.target.value
    })
  }

  handleOnPress = (event) => {
    if (event.key === "Enter") {
      if (!this.state.task) return;
      this.addNewTask();
      this.clearInputTask()
    }
  }

  addNewTask = () => {
    this.props.createTask(this.state.task)
  }

  clearInputTask = () => {
    this.setState({
      task: ''
    })
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1> 
        <input
          onChange={this.handleInputOnchange}
          onKeyPress={this.handleOnPress}
          value={this.state.task}
          autoFocus="autofocus" 
          autoComplete="off" 
          placeholder="What needs to be done?" 
          className="new-todo"
        />
      </header>
    )
  }
}