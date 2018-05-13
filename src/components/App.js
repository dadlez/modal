import React, { Component } from 'react';
import '../styles/App.css';
import Modal from './Modal';
import Button from './Button';
import List from './List';

class App extends Component {
  state = {
    modalVisible: false,
    list: []
  }

  toggleModal = () => {
    const modalVisible = !this.state.modalVisible;
    this.setState({ modalVisible })
  }

  updateList = (item) => {
    this.setState({ list: [...this.state.list, item] })
  }

  render() {
    const isListEmpty = this.state.list.length > 0;
    
    return (
      <div className="App">
        <Button className='btn-showModal' onClick={this.toggleModal}>pokaż modal</Button>
        {isListEmpty && 
        <List list={this.state.list}/>}
        <Modal visible={this.state.modalVisible} toggleModal={this.toggleModal} updateList={this.updateList} />
      </div>
    );
  }
}

export default App;
