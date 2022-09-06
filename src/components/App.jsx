import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from './Form/Form';
import Filter from './Form/formComponents/Filter';
import ContactList from './Form/formComponents/ContactList';

export default function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const dispatch = useDispatch();

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const contactsFilter = () => {
    const filteredCont = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredCont;
  };

  const formSubmitHandler = data => {
    dispatch(data);
  };

  const deleteContact = e => {
    setContacts(contacts.filter(contacts => contacts.id !== e));
  };

  return (
    <section>
      <h1>Phonebook</h1>

      <Form onSubmit={formSubmitHandler} contacts={contacts} />
      <Filter contactsFilter={changeFilter} currentValue={filter} />
      <ContactList
        currentContacts={contactsFilter()}
        deleteContact={deleteContact}
      />
    </section>
  );
}
