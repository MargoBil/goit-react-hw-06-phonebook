import React from 'react';
import {connect} from 'react-redux';

import contactsActions from '../../redux/contacts/contactsActions';

import s from './ContactItem.module.css';

const ContactItem = ({contact, number, onDeleteContact}) => {
  return (
    <li className={s.item}>
      <p>
        {contact}: {number}
      </p>
      <button onClick={onDeleteContact}>Delete</button>
    </li>
  );
};
const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);
  return {
    contact: item.name,
    number: item.number,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () => dispatch(contactsActions.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
