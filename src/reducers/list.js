import { SAVE_FORM } from '../constants';

export default (state, action) => {
  switch (action.type) {
    case SAVE_FORM:
      return [...state, action.list];
    default: 
      return state;
  }
}