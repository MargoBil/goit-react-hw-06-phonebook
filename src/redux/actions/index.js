import {createAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
import * as action from './actions';

export const addName = createAction(action.ADD, ({name, number}) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

export const deleteContact = createAction(action.DELETE);

export const changeFilter = createAction(action.CHANGE_FILTER);

export const toggleTheme = createAction(action.TOGGLE_THEME);
