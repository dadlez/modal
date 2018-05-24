import React, { Component } from 'react';
import '../styles/Input.css';

export default class extends Component {
  state = {
    value: ''
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }
  
  onBlur = (e) => {
    this.props.updateForm(this.props.name, e.target.value);
  }

  render() {
    const { name, type, placeholder, autoFocus = null } = this.props;

    return (
      <div className='input-text'>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input 
          name={name} 
          id={name} 
          type={type} 
          value={this.state.value} 
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder={placeholder} 
          autoFocus={autoFocus} 
          required={this.props.required}
        />
      </div>
    ) 
  }
}