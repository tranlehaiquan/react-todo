import React, {Component} from 'react'

export default class TodoFilters extends Component {
  render() {
    return(
      <ul className="filters">
        <li><a href="#/all" className="selected">All</a></li>
        <li><a href="#/active" className="">Active</a></li>
        <li><a href="#/completed" className="">Completed</a></li>
      </ul>
    )
  }
}