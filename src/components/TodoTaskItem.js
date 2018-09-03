import React, {Component} from 'react'
import {classNames} from '../utilities';

export default class TodoTaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      textEditor: ''
    };
  }

  componentDidMount() {
    this.setState((preState) => ({
      textEditor: this.props.task.label
    }))
  }

  handleCheckboxOnchange = (evEl) => {
    const isCompleted = evEl.target.checked;  

    this.props.updateTask({
      ...this.props.task,
      state: isCompleted ? 'completed' : 'active'
    })
  }

  handleInputOnBlur = (evEl) => {
    this.setState((preState) => ({
      isEdit: false
    }))
  }

  handleDoubleClick = (evEl) => {
    if (this.props.task.state === 'completed') return;
    this.setState(() => ({
      isEdit: true
    }));
  }
  
  componentDidUpdate(preState) {
    if(!preState.isEdit && this.state.isEdit) {
      let input = this.inputEdit;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length)
    }
  }

  handleKeypressUpdate = (evEl) => {
    if (evEl.key === 'Enter') {
      this.props.updateTask({
        ...this.props.task,
        label: this.state.textEditor
      });
      this.setState({
        isEdit: false
      })
    } else if (evEl.key === 'Escape') {
      this.setState({
        textEditor: this.props.task.label,
        isEdit: false
      })
    }
  }

  handleTextEditChange = (evEl) => {
    this.setState({
      textEditor: evEl.target.value
    })
  }

  render() {
    const isCompleted = this.props.task.state === 'completed';
    const itemClassNames = classNames({
      completed: isCompleted,
      editing: this.state.isEdit
    }) 
    return(
      <li className={itemClassNames}>
        <div className="view">
          <input 
            onChange={this.handleCheckboxOnchange} 
            className="toggle" 
            type="checkbox"
            checked={isCompleted}
          />
          <label onDoubleClick={this.handleDoubleClick}>{ this.props.task.label }</label>
          <button
            className="destroy"
            onClick={() => this.props.deletedTask(this.props.task.id)}
          ></button>
        </div>
        <input
          ref={(ref) => this.inputEdit = ref}
          onBlur={this.handleInputOnBlur}
          value={this.state.textEditor}
          onChange={this.handleTextEditChange}
          onKeyDown={this.handleKeypressUpdate}
          className="edit"
        />
      </li>
    )
  }
}