import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <button
            type="button"
            name="delete"
            onClick={() => removeContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.object.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
