import React, { Component } from 'react';
import ContactsForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';

import '../../node_modules/modern-normalize/modern-normalize.css';

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contact</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}
