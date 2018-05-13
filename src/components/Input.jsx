import React, { Component } from 'react';
import '../styles/Input.css';

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
    const { name, type, value, placeholder, autoFocus = null } = this.props;

    return (
      <div className='input-text'>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input 
          name={name} 
          id={name} 
          type={type} 
          value={value} 
          onChange={this.onChange} 
          placeholder={placeholder} 
          autoFocus={autoFocus} 
        />
      </div>
    ) 
  }
}