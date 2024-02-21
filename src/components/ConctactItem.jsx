import PropTypes from 'prop-types';
import {
  ContactItemLi,
  ContactItemName,
  ContactItemNumber,
  ContactItemBtn,
} from './ContactItem.styled';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <ContactItemLi key={id}>
      <ContactItemName>{name}</ContactItemName>
      <ContactItemNumber>{number}</ContactItemNumber>
      <ContactItemBtn onClick={() => onDeleteContact(id)}>
        Delete
      </ContactItemBtn>
    </ContactItemLi>
  );
};

export default ContactItem;

ContactItem.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
