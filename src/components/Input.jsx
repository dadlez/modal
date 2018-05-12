import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    value: ''
  }

  onChange = (e) => {
    const value = e.target.value;
    
    this.props.updateForm(this.props.name, value);
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input 
          name={this.props.name} 
          id={this.props.name} 
          type={this.props.type} 
          value={this.state.value} 
          onChange={this.onChange} 
          placeholder={this.props.placeholder} />
      </div>
    ) 
  }
}