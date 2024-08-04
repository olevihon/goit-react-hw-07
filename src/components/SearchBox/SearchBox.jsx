import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.name);

  const handleFilter = (filter) => {
    dispatch(changeFilter(filter));
  };

  return (
    <div>
      <p className={css.inputLabel}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </div>
  );
}
