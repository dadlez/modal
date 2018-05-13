import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Form from './Form';

export default class Modal extends Component {
  state = {
    visible: this.props.visible
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') {
        this.props.toggleModal();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ visible: nextProps.visible });
  }

  render() {
    return (
      this.state.visible &&
      <Wrapper onClick={this.props.toggleModal}>
        <Form 
          toggleModal={this.props.toggleModal} 
          updateList={this.props.updateList} />
      </Wrapper>
    );
  }
}