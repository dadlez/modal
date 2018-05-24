import React, { Component } from 'react';
import Input from './Input';
import Dropdown from './Droppdown';
import Button from './Button';
import '../styles/Form.css';

export default class extends Component {
  state = {
    value: {
      name: '',
      surname: '',
      employment: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.toggleModal();
    this.props.saveForm(this.state.value);
  }

  updateState = (key, value) => {
    const newValue = Object.assign({}, this.state.value, { [key]: value });

    this.setState({ value: newValue });
  }

  render() {
    console.log('form this.state', this.state)
    return (
      <div className='container' onClick={e => e.stopPropagation()}>
        <form className='modal-form' onSubmit={this.onSubmit}>
          <Input type='text' label='Imię' placeholder='' name='name' updateForm={this.updateState} autoFocus required />
          <Input type='text' label='Nazwisko' placeholder='' name='surname' updateForm={this.updateState} required />
          <Dropdown label='Forma zatrudnienia' name='employment' updateForm={this.updateState} />
          <Button className='btn-submit' type='submit'>Zapisz</Button>
        </form>
      </div>
    ) 
  }
}