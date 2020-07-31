import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import Modal from '../Modal';

import './ContactsForm.css';

class ContactsForm extends Component {
  static propTypes = {
    onContact: propTypes.func.isRequired,
    contacts: propTypes.object.isRequired,
  };

  state = {
    name: '',
    number: '',
    message: '',
    showModal: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    const checkedName = contacts.items.find(contact => name === contact.name);
    const { onContact } = this.props;

    if (!name || !number) {
      this.closeModal();
      return this.setState({ message: `Fill in all the fields` });
    }
    if (checkedName) {
      this.closeModal();
      return this.setState({ message: `${name} is already in contacts` });
    }

    onContact(this.state);
    this.resetForm();
  };

  resetForm() {
    this.setState({ name: '', number: '' });
  }

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { name, number, message, showModal } = this.state;

    return (
      <>
        {message !== '' && showModal ? (
          <Modal onClose={this.closeModal}>{message}</Modal>
        ) : null}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name
              <input
                type="text"
                className="input"
                placeholder="Enter name"
                value={name}
                name="name"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Number
              <input
                type="text"
                className="input"
                placeholder="Enter number"
                value={number}
                name="number"
                onChange={this.handleChange}
              />
            </label>
          </div>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onContact: contact => dispatch(contactsActions.saveContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
