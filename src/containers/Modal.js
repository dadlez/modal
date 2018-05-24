import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import Modal from '../components/Modal';

const mapStateToProps = state => {
  return {
    visible: state.modalVisible
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: visible => dispatch(toggleModal(visible))
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Modal)