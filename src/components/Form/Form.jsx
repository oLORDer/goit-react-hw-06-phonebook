import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './form.module.scss';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.checkDuplicateName()) {
      return;
    }

    const { name, number } = this.state;

    this.props.onSubmit({ name, number, id: nanoid() });
    this.reset();
  };

  checkDuplicateName = () => {
    const { contacts } = this.props;
    let isAlredyHasContact = false;
    let dublicatedName = null;
    const normalizeName = this.state.name.toLowerCase();

    contacts.map(
      el =>
        el.name.toLowerCase() === normalizeName &&
        ((isAlredyHasContact = true), (dublicatedName = el.name))
    );

    if (isAlredyHasContact) {
      alert(dublicatedName + ' is alredy in your contact');
    }

    return isAlredyHasContact;
  };

  reset = () => {
    this.setState({ name: '', number: '', id: '', filter: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
