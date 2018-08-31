import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1> 
        <input autoFocus="autofocus" autoComplete="off" placeholder="What needs to be done?" className="new-todo"/>
      </header>
    )
  }
}