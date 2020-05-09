import React from 'react';
import PropTypes from "prop-types"
import { InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

class Filters extends React.Component {
  render() {
    return (
      <InputGroup className={this.props.className}>
        <FormControl
          placeholder="Case #, Patient's name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />

        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title="Open Cases"
          id="input-group-dropdown-2"
        >
          <Dropdown.Item href="#">My Cases</Dropdown.Item>
          <Dropdown.Item href="#">Open Cases</Dropdown.Item>
          <Dropdown.Item href="#">Resolved Cases</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    )
  }
}

Filters.propTypes = {
  className: PropTypes.string || PropTypes.undefined
}

export default Filters;
