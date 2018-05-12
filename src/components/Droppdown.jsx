import React, { Component } from 'react';

export default class Dropdown extends Component {
  state = {
    value: ''
  }

  render() {
    return (
      <div>
        <select>
          <option value=''>Zatrudniony</option>
          <option value=''>Wolny</option>
        </select>
      </div>
    ) 
  }
}