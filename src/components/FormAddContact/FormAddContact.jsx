import React from 'react';
import { StyledFormAddContacts } from './FormAddContact.styled';
import { addContact, getContacts } from 'redux/ContactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

export const FormAddContact = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const form = e.target;
    e.preventDefault();

    const contact = {
      id: nanoid(6),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    const isExist = contacts.some(el => el.name === contact.name);

    if (isExist) {
      alert(`${contact.name} is already in contact list.`);
      return;
    }
    dispatch(addContact(contact));

    form.reset();
  };

  return (
    <StyledFormAddContacts onSubmit={handleSubmit}>
      <label className="label">
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="label">
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </StyledFormAddContacts>
  );
};
