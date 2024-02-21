import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { AppContainer, AppWrapper } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const checkContactExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkContactExist) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  findContact = name => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };
  handleChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  saveContacts = () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  loadContacts = () => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  };

  componentDidMount() {
    this.loadContacts();
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    return (
      <AppContainer>
        <AppWrapper>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleChangeFilter} />
          <ContactList
            contacts={contacts}
            onDeleteContact={this.deleteContact}
          />
        </AppWrapper>
      </AppContainer>
    );
  }
}
