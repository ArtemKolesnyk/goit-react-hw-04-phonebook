import PropTypes from "prop-types";
import { Form, Label, Input } from '../ContactForm/ContactForm.styled';


const Filter = ({ value, onChangeFilter }) => {
  return (
    <Form>
      <Label>
        Find contact by name
        <Input
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </Label>
    </Form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
}

export default Filter;
