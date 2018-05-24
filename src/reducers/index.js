import list from './list';
import modalVisible from './modalVisible';

const initialState = {
  list: [],
  modalVisible: false
};

const reducer = (state = initialState, action) => {
  return {
    modalVisible: modalVisible(state.modalVisible, action),
    list: list(state.list, action)
  }
};

export default reducer;