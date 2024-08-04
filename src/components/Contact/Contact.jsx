import css from './Contact.module.css';

import ContactInfo from '../ContactInfo/ContactInfo.jsx';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.info}>
        <ContactInfo type="name" text={name} />
        <ContactInfo type="number" text={number} />
      </div>
      <button className={css.deleteBtn} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}
