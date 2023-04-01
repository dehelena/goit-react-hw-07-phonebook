import React from 'react';
import { StyledTitle } from './TitleStyled';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <StyledTitle>Phonebook</StyledTitle>
      <FormAddContact />
      <StyledTitle>Contacts</StyledTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress... </b>}
      <ContactList />
    </div>
  );
};

export default App;
