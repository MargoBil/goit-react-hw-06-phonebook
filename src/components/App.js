import React from 'react';
import {connect} from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';

const App = ({contacts}) => {
  const visibleFilter = contacts.items.length > 1;
  const visibleList = contacts.items.length > 0;
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
        {visibleFilter && <Filter />}
      </Section>
      {visibleList && (
        <Section title="Contacts">
          <ContactList />
        </Section>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(App);
