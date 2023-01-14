import PropTypes from 'prop-types';
import { ContactItem, ContactBtn, Text } from './Contact.styled';


const Contact = ({contact: {name, number, id}, removeContact}) => {
  return (
    <ContactItem>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <ContactBtn onClick={()=> removeContact(id)}>Delete</ContactBtn>
    </ContactItem>
  )
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  removeContact: PropTypes.func.isRequired,
}

export default Contact;