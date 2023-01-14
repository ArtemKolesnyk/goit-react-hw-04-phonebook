import PropTypes from 'prop-types';
import Contact from '../Contact';
import { ListItem } from './ContactList.styled';

const ContactList = ({ contacts, removeContact }) => {
  return <ListItem>
    {contacts.map(contact => (
      <Contact removeContact={removeContact} key={contact.id} contact={contact} />
    ))}
  </ListItem>
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;