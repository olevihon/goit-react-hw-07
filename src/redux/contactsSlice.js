import { createSelector, createSlice } from '@reduxjs/toolkit';
import { deleteContact, fetchAllContacts, addContact } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const handleFulfilled = (state, action, callback) => {
  state.loading = false;
  state.error = null;
  callback(state, action);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // fetchAllContacts
      .addCase(fetchAllContacts.pending, handlePending)
      .addCase(fetchAllContacts.rejected, handleRejected)
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        handleFulfilled(state, action, (state, action) => {
          state.items = action.payload;
        });
      })

      // addContact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state, action, (state, action) => {
          state.items.push(action.payload);
        });
      })

      // deleteContact
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        handleFulfilled(state, action, (state, action) => {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id,
          );
        });
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, textFilter) => {
    // console.log('Calculating filtering contacts. Now memoized!');
    return contacts.filter((contact) => {
      if (textFilter.trim() === '') {
        return contacts;
      }
      return contact.name.toLowerCase().includes(textFilter.toLowerCase());
    });
  },
);
