import css from './ContactList.module.css';

import Contact from '../Contact/Contact.jsx';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const memoizedContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {memoizedContacts.map((data) => (
        <li className={css.listItem} key={data.id}>
          <Contact data={data} />
        </li>
      ))}
    </ul>
  );
}
