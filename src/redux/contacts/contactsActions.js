import {createAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

const addName = createAction('name/add', ({name, number}) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const deleteContact = createAction('contact/delete');

const changeFilter = createAction('contact/changeFilter');

export default {addName, deleteContact, changeFilter};
