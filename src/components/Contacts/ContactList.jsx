import { Component } from 'react';
import css from '../Contacts/ContactList.module.css';

class ContactList extends Component {
  render() {
      return this.props.filteredContact.map(contact => (
        <li key={contact.id} className={css.contact__item}>
          <p>{contact.name}:</p>
          <span>{contact.number}</span>
          <button
            type="button"
            onClick={() => this.props.deleteContact(contact.id)}
            className={css.delete__btn}
            id={contact.id}
          >
            Delete
          </button>
        </li>
      ));
  }
}

export default ContactList;
