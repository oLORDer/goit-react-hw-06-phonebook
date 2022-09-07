import { ADD_CONTACT, REMOVE_CONTACT } from './types';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const removeContact = payload => {
  return {
    type: REMOVE_CONTACT,
    payload,
  };
};
