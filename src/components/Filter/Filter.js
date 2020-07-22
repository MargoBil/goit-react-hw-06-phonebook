import React from 'react';
import {connect} from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

import s from './Filter.module.css';

const Filter = ({value, onChange}) => {
  return (
    <div className={s.box}>
      <label>
        Find contacts by name
        <input value={value} onChange={(e)=> onChange(e.target.value)} />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChange: contactsActions.changeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
