export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.IsLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContact = state => state.filter.value;
