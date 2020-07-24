import React from 'react';
import {connect} from 'react-redux';

import {deleteContact} from '../../redux/actions/index';

import s from './ContactItem.module.css';

const ContactItem = ({contact, number, theme, onDeleteContact}) => {
  return (
    <li className={s[`item${theme}`]}>
      <p>
        {contact}: {number}
      </p>
      <button className={s[`btn${theme}`]} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);
  return {
    contact: item.name,
    number: item.number,
    theme: state.theme.themeColor,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () => dispatch(deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
