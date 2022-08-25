import { Component } from 'react';
import Form from './Form/Form';
import Filter from './Form/formComponents/Filter';
import ContactList from './Form/formComponents/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  contactsFilter = () => {
    const { contacts, filter } = this.state;

    const filteredCont = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredCont;
  };

  formSubmitHandler = data => {
    const newContact = {
      name: data.name,
      number: data.number,
      id: data.id,
    };
    this.setState(el => ({
      contacts: [newContact, ...el.contacts],
    }));
  };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== e),
    }));
  };

  // react-lifecycle-method

  componentDidMount() {
    const dataContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(dataContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(pverProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const bookInfo = this.contactsFilter();

    return (
      <section>
        <h1>Phonebook</h1>

        <Form onSubmit={this.formSubmitHandler} contacts={contacts} />
        <Filter contactsFilter={this.changeFilter} currentValue={filter} />
        <ContactList
          currentContacts={bookInfo}
          deleteContact={this.deleteContact}
        />
      </section>
    );
  }
}
