import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

export default function ContactList({ currentContacts, deleteContact }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {currentContacts.map(el => {
          return (
            <ContactItem
              key={nanoid()}
              name={el.name}
              number={el.number}
              id={el.id}
              deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  currentContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};
