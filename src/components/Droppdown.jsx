import React, { Component } from 'react';
import '../styles/Dropdown.css'

export default class Dropdown extends Component {
  state = {
    value: ''
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
          <option value='Zatrudniony' selected>Zatrudniony</option>
          <option value='Wolny'>Wolny</option>
        </select>
      </div>
    ) 
  }
}