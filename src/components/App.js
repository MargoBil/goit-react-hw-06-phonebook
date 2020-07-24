import React from 'react';
import {connect} from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import ThemeButton from './ThemeButton/ThemeButton';
import Wrapper from './Wrapper/Wrapper';

const App = ({contacts}) => {
  const visibleFilter = contacts.items.length > 1;
  const visibleList = contacts.items.length > 0;
  return (
    <Wrapper>
      <ThemeButton />
      <Section title="Phonebook">
        <ContactForm />
        {visibleFilter && <Filter />}
      </Section>
      {visibleList && (
        <Section title="Contacts">
          <ContactList />
        </Section>
      )}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(App);
