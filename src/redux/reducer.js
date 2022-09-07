import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';

const initialStore = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const reducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const newContact = [...store.contacts, payload];
      return { ...store, contacts: newContact };
    case REMOVE_CONTACT:
      const result = store.contacts.filter(item => item.id !== payload);
      return { ...store, contacts: result };
    case SET_FILTER:
      return { ...store, filter: payload };
    default:
      return store;
  }
};

export default reducer;
