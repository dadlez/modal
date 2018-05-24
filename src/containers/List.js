import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

export default connect(
  mapStateToProps, 
  null
)(List)