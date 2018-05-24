import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Form from '../containers/Form';

export default class extends Component {
  state = {
    visible: this.props.visible
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && this.state.visible) {
        this.props.toggleModal();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ visible: nextProps.visible });
  }

  render() {
    console.log('modal this.props, this.state', this.props, this.state)
    return (
      this.state.visible &&
      <Wrapper onClick={this.props.toggleModal}>
        <Form />
      </Wrapper>
    );
  }
}