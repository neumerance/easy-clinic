import React from "react"
import PropTypes from "prop-types"
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cards extends React.Component {
  render () {
    const renderCases = this.props.patientCases.map((patientCase, idx) => {
      const isActive = patientCase.id === (this.props.patientCase && this.props.patientCase.id);
      return <Card
                active={isActive}
                key={`patientCaseCard${patientCase.id}${idx}`}
                patientCase={patientCase}
                fetchPatientCase={this.props.fetchPatientCase}
              />
    });

    return (
      <div className={this.props.className}>
        {renderCases}
        {this.props.children}
      </div>
    );
  }
}

Cards.propTypes = {
  fetchPatientCase: PropTypes.func.isRequired,
  patientCase: PropTypes.object,
  patientCases: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Cards;
