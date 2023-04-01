// import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.IsLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredTerm = state => state.filter.value;

//перерахунок буде відбуватись лише коли зміниться або контакти або значення фільтра
//якщо в компоненті робити фільтрацію, тоді рендеритись буде постійно
// export const selectFilteredContacts = createSelector(
//   selectContacts,
//   selectFilteredTerm,
//   (contacts, filterTerm) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterTerm.toLowerCase())
//     );
//   }
// );
