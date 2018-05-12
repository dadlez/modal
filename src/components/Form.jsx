import React, { Component } from 'react';
import Input from './Input';
import Dropdown from './Droppdown';
import Button from './Button';
import '../styles/Form.css';

export default class Form extends Component {
  state = {
    value: {
      name: '',
      surname: '',
      emplyment: []
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.toggleModal();
    this.props.updateList(this.state.value);
  }

  updateState = (key, value) => {
    const newValue = Object.assign({}, this.state.value, { [key]: value });

    this.setState({ value: newValue });
  }

  render() {
    return (
      <div className='Container' onClick={e => e.stopPropagation()}>
        <form onSubmit={this.onSubmit}>
          <Input type='text' label='Imię' placeholder='' name='name' updateForm={this.updateState} />
          <Input type='text' label='Nazwisko' placeholder='' name='surname' updateForm={this.updateState} />
          <Dropdown label='Forma zatrudnienia' name='employment' />
          <Button className='btn-submit' type='submit'>Zapisz</Button>
        </form>
      </div>
    ) 
  }
}