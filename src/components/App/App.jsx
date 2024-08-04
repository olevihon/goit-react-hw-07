import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import { fetchAllContacts } from '../../redux/contactsOps';
import { useEffect } from 'react';

export default function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error occurred. Please try to reload the page.</p>}
      <ContactList />
    </div>
  );
}
