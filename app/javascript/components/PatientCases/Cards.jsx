import React from "react"
import PropTypes from "prop-types"
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cards extends React.Component {
  render () {
    const renderCases = this.props.patientCases.map(patientCase => {
      return <Card 
                key={`patientCaseCard${patientCase.id}`} 
                patientCase={patientCase} 
                fetchPatientCase={this.props.fetchPatientCase}
              />
    });

    return (
      <div className={this.props.className}>
        {renderCases}
      </div>
    );
  }
}

Cards.propTypes = {
  fetchPatientCase: PropTypes.func.isRequired,
  patientCases: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Cards;
