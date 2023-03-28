import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    id: '',
    number: '',
  };

  addContactBtn = event => {
    event.preventDefault();
    const { name, id, number } = this.state;
    const newContact = { name, id, number };
    this.props.addContact(newContact);
    this.setState({ name: '', id: '', number: '' });
  };

  handleAddContactName = e => {
    this.setState({ name: e.target.value, id: nanoid() });
  };

  handleAddContactNumber = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addContactBtn} className={css.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder='Enter name'
             className={css.form__input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleAddContactName}
            value={this.state.name}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            placeholder='Enter number 111-22-33'
             className={css.form__input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleAddContactNumber}
            value={this.state.number}
          />
        </label>
        <button type="submit" className={css.form__btn}>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
