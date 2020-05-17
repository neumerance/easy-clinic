import React from 'react';
import PropTypes from "prop-types"
import { InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

class Filters extends React.Component {
  onStatusChange(status) {
    this.props.onFilterChange({
      ...this.props.filters,
      status
    });
  }

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
          title={`${this.props.filters.status} cases`}
          id="input-group-dropdown-2"
        >
          <Dropdown.Item href="#" onClick={() => { this.onStatusChange('taken') }}>My Cases</Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => { this.onStatusChange('open') }}>Open Cases</Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => { this.onStatusChange('resolved') }}>Resolved Cases</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    )
  }
}

Filters.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired
}

export default Filters;
