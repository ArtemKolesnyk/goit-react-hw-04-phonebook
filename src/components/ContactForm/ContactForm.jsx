import { useState } from 'react';
import { Form, Label, Button, Input } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const ConatctForm = ({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => name === contact.name)) {
      toast.warn(`${name} is already in contacts.`);
      return;
    }
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          placeholder="Enter your name..."
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          placeholder="Enter your number..."
        />
      </Label>
      <Button>Add contact</Button>
    </Form>
  );
};

ConatctForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  onSubmit: PropTypes.func.isRequired,
};

export default ConatctForm;
