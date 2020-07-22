import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';

import contactsActions from './contactsActions';

const onAddName = (state, action) => {
  const ideticalContact = state.find(
    contact =>
      contact.name.toLowerCase() === action.payload.contact.name.toLowerCase(),
  );
  return ideticalContact ? alert('This contact already exists!') : [...state, action.payload.contact];
};

const onDeleteContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const onChangeFilter = (state, action) => {
  return action.payload;
};

const items = createReducer([], {
  [contactsActions.addName]: onAddName,
  [contactsActions.deleteContact]: onDeleteContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: onChangeFilter,
});

export default combineReducers({
  items,
  filter,
});
