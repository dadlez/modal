import React, { Component } from 'react';
import '../styles/App.css';
import Modal from '../containers/Modal';
import Button from '../containers/Button';
import List from '../containers/List';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <Button className='btn-showModal'>pokaż modal</Button>
        <List />
        <Modal />
      </div>
    );
  }
}

export default App;
