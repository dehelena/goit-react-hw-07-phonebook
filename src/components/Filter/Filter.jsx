// import PropTypes from 'prop-types';
import { FilterStyled } from './FilterStyled';
import { filterContacts } from 'redux/FilterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterStyled>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={e => {
            dispatch(filterContacts(e.target.value));
          }}
        />
      </label>
    </FilterStyled>
  );
};
