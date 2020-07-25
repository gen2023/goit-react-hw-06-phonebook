// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';
// import types from './contacts-types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.SAVE:
//       return [...state, payload];

//     case types.REMOVE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });

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
    const isAlreadyInContacts = state.items.some(
      contact => contact.name === payload.name,
    );
    if (isAlreadyInContacts) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    return {
      ...state,
      items: [...state.items, payload],
    };
  },

  [contactsActions.removeContact]: (state, { payload }) => {
    return state.items.filter(({ id }) => id !== payload);

    //   const items = state.items.filter(({ id }) => id !== payload);

    //   return items.length === 1
    //     ? {
    //         items: items,
    //         filter: '',
    //       }
    //     : {
    //         items: items,
    //         filter: state.filter,
    //       };
  },

  [contactsActions.changeFilter]: (state, { payload }) => {
    return {
      ...state,
      filter: payload,
    };
  },
});
export default contactsReducer;
