import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts } from 'service/contactsAPI';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: true,
    error: action.payload,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addContact(state, action) {
  //     console.log('action payload', action.payload);
  //     //action.payload - об'єкт новоствореного контакту

  //     state.items = [...state.items, action.payload];
  //     // state.items.push(action.payload); -- теж можна додати таким чином
  //   },
  //   deleteContact(state, action) {
  //     state.items = state.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },

  //Властивість extraReducers використовується щоб оголосити редюсери
  //для «зовнішніх» типів екшенів, тобто тих, які не згенеровані
  //з властивості reducers.Оскільки ці редюсери обробляють «зовнішні»
  //екшени, для них не буде створено генератори екшенів в slice.actions,
  //в цьому немає необхідності.
  extraReducers: builder => {
    builder
      // ======= FETCH CONTACTS  ======
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: action.payload,
          error: null,
        };

        // state.isLoading = false;
        // state.error = null;
        // state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      //   ======= ADD CONTACT  ======
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: [action.payload, ...state.items],
          // state.items.push(action.payload); -- теж можна додати таким чином
          error: null,
        };
      })
      .addCase(addContact.rejected, handleRejected)

      //  ======= DELETE CONTACT  ======
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: state.items.filter(contact => contact.id !== action.payload),
          error: null,
        };
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
