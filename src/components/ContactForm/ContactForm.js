import React, {Component} from 'react';
import {connect} from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

import InputMask from 'react-input-mask';

import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
}

class ContactForm extends Component {
  state = {...INITIAL_STATE};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddName(this.state);
    this.setState({...INITIAL_STATE});
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  render () {
    const {name, number} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input className={s.input} type="text" value={name} name="name" onChange={this.handleChange} />
        </label>
        <label>
          Number
          <InputMask className={s.input} mask="999-99-99" maskChar=" " value={number} name="number" onChange={this.handleChange} />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddName: contactsActions.addName
}

export default connect(null, mapDispatchToProps)(ContactForm);
