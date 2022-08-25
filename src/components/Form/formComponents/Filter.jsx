import PropTypes from 'prop-types';

export default function Filter({ contactsFilter, currentValue }) {
  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="filter"
        value={currentValue}
        onChange={contactsFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  contactsFilter: PropTypes.func.isRequired,
  currentValue: PropTypes.string.isRequired,
};
