import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import Button from '../components/Button';

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(toggleModal())
  }
};

export default connect(
  null, 
  mapDispatchToProps
)(Button)