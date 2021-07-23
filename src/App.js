import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ContactForm from "./Components/ContatctForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import Container from "./Components/Container";
import Section from "./Components/Section";

import "./styles.scss";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onAddContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const contactExists = this.state.contacts.find(
      (contact) => contact.name === name
    );

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  onFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <div className="wrapper">
          <Section title="Add contact">
            <ContactForm onAddContact={this.onAddContact} />
          </Section>
          <Section title="Contacts">
            <Filter value={this.state.filter} onChange={this.onFilter} />
            <ContactList
              contacts={this.filteredContacts()}
              onDeleteContact={this.onDeleteContact}
            />
          </Section>
        </div>
      </Container>
    );
  }
}

export default App;
