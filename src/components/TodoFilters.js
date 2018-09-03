import React, {Component} from 'react'

export default class TodoFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterStates: [{
        state: '',
        label: 'All'
      }, {
        state: 'active',
        label: 'Active'
      }, {
        state: 'completed',
        label: 'Completed'
      }]
    };
  }

  renderFilterItems = () => {
    return this.state.filterStates.map((filterState) => {
      const isSeleted = this.props.currentfilterState === filterState.state;
      return (
        <li key={filterState.state}>
          <a 
            onClick={() => this.props.changeFilter(filterState.state)} 
            className={ isSeleted ? 'selected' : ''}
          >
            { filterState.label }
          </a>
        </li>
      )
    })
  }

  render() {
    return(
      <ul className="filters">
        { this.renderFilterItems() }
      </ul>
    )
  }
}