import { TOGGLE_MODAL } from '../constants';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default: 
      return state;
  }
}