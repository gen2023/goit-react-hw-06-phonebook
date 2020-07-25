import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import types from './contacts-types';

const saveContact = createAction('contacts/save', (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});
const removeContact = createAction('contacts/remove');
const changeFilter = createAction('contacts/changeFilter');

export default { saveContact, removeContact, changeFilter };

// const saveContact = ({ name, number }) => {
//   return {
//     type: types.SAVE,
//     payload: {
//       id: shortid.generate(),
//       name,
//       number,
//     },
//   };
// };

// const removeContact = contactId => ({
//   type: types.REMOVE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export default { saveContact, removeContact, changeFilter };
