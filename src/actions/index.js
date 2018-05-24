import { TOGGLE_MODAL, SAVE_FORM } from '../constants';

export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL
  }
}

export const saveForm = (data) => {
  return {
    type: SAVE_FORM,
    list: data
  }
}