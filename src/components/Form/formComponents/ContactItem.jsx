import s from 'components/Form/form.module.scss';
import PropTypes from 'prop-types';

export default function ContactItem({ name, number, id, deleteContact }) {
  return (
    <>
      <li id={id} className={s.item}>
        <div>{`${name}: ${number}`}</div>
        <button className={s.deleteBtn} onClick={() => deleteContact(id)}>
          delete
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
