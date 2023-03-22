import React from 'react';
import { StyledTitle } from './TitleStyled';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';

const App = () => {
  return (
    <div>
      <StyledTitle>Phonebook</StyledTitle>
      <FormAddContact />
      <StyledTitle>Contacts</StyledTitle>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
