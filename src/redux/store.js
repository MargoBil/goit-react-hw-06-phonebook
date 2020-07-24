import {configureStore} from '@reduxjs/toolkit';

import {contactsReducer, themeReducer} from './reducers/rootReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    theme: themeReducer,
  },
});

export default store;
