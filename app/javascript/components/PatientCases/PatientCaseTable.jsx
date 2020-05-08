import React from "react"
import PropTypes from "prop-types"
import { Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class PatientCaseTable extends React.Component {
  componentWillMount() {
    this.props.fetchPatientCases();
  }

  render () {
    return (
      <React.Fragment>
        <Table>
        </Table>
      </React.Fragment>
    );
  }
}

PatientCaseTable.propTypes = {
  patientCases: PropTypes.array
}

export default PatientCaseTable;
