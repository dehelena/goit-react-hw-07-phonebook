import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      console.log('action payload', action.payload);
      //action.payload - об'єкт новоствореного контакту

      state.items = [...state.items, action.payload];
      // state.items.push(action.payload); -- теж можна додати таким чином
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;

//Selectors

export const selectContacts = state => state.contacts.items;
