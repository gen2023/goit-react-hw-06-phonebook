import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsReducer = createReducer(initialState, {
  [contactsActions.saveContact]: (state, { payload }) => {
    return {
      ...state,
      items: [...state.items, payload],
    };
  },

  [contactsActions.removeContact]: (state, { payload }) => {
    const items = state.items.filter(({ id }) => id !== payload);
    return items.length === 1
      ? {
          items: items,
          filter: '',
        }
      : {
          items: items,
          filter: state.filter,
        };
  },

  [contactsActions.changeFilter]: (state, { payload }) => {
    return {
      ...state,
      filter: payload,
    };
  },
});
export default contactsReducer;
