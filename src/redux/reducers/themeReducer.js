import {createReducer} from '@reduxjs/toolkit';

import {toggleTheme} from '../actions/index';

const onToggleTheme = (state) => {
  return state === 'Light' ? (state = 'Dark') : (state = 'Light');
};

export const themeColor = createReducer('Light', {
  [toggleTheme]: onToggleTheme,
});
