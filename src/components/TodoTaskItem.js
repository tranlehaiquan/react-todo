import React, {Component} from 'react'

export default class TodoTaskItem extends Component {
  render() {
    return(
      <li className="">
        <div className="view">
          <input className="toggle" type="checkbox"/>
          <label>{ this.props.task }</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" defaultValue={this.props.task}/>
      </li>
    )
  }
}