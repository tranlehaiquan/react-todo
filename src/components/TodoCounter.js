import React, {Component} from 'react'

export default class TodoCounter extends Component {
  render() {
    return(
      <span className="todo-count"><strong>{ this.props.itemsLeft }</strong> items left</span>
    )
  }
}