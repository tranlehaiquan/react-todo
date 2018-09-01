import React, {Component} from 'react'

export default class TodoTaskItem extends Component {
  render() {
    return(
      <li className="">
        <div className="view">
          <input className="toggle" type="checkbox"/>
          <label>{ this.props.task.label }</label>
          <button 
            className="destroy"
            onClick={() => this.props.deletedTask(this.props.task.id)}
          ></button>
        </div>
        <input className="edit" defaultValue={this.props.task.label}/>
      </li>
    )
  }
}