import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact } from 'redux/contacts/books/items-types';

const initialStore = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contacts = createReducer(initialStore, {
  [addContact]: (store, { payload }) => {
    store.push(payload);
  },
});

// const contacts = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case addContact:
//       const newContact = [...store.contacts, payload];
//       return { ...store, contacts: newContact };
//     case deleteContact:
//       const result = store.contacts.filter(item => item.id !== payload);
//       return { ...store, contacts: result };
//     default:
//       return store;
//   }
// };

export default contacts;
