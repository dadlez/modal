import React, { Component } from 'react';
import '../styles/Dropdown.css'

export default class extends Component {
  state = {
    value: 'Wolny'
  }

  componentDidMount() {
    this.props.updateForm(this.props.name, this.state.value)
  }

  onSelect = (e) => {
    const value = e.target.value;

    this.setState({ value });
    this.props.updateForm(this.props.name, value);
  }

  render() {
    return (
      <div className='dropdown'>
      <label htmlFor={this.props.name}>Zatrudnienie</label>
        <select id={this.props.name} value={this.state.value} onChange={this.onSelect}>
          <option value='Wolny'>Wolny</option>
          <option value='Zatrudniony'>Zatrudniony</option>
        </select>
      </div>
    ) 
  }
}