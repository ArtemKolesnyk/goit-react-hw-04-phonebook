import { nanoid } from 'nanoid';
import { useState } from 'react';
import AppStyled from './App.styled';
import ConatctForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const addContact = contacts => {
    const newContact = {
      ...contacts,
      id: nanoid(),
    };
    setContacts(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  const removeContact = contactId => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  const changeFilter = e => {
    const { filter, value } = e.target;
    if (filter) {
      setFilter(value);
    }
  };

  const getFiltredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <AppStyled />
      <section>
        <h1>--PHONEBOOK--</h1>
        <ConatctForm contacts={contacts} onSubmit={addContact} />
        <h2>--CONTACTS--</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={changeFilter} />
        )}
        <ContactList
          contacts={getFiltredContact()}
          removeContact={removeContact}
        />
      </section>
    </>
  );
};

export default App;
