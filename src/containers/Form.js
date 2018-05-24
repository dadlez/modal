import { connect } from 'react-redux';
import { toggleModal, saveForm } from '../actions';
import Form from '../components/Form';

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal()),
    saveForm: value => dispatch(saveForm(value))

  }
};

export default connect(
  null,
  mapDispatchToProps
)(Form)