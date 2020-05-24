import React from "react"
import PropTypes from "prop-types"
import { Card as BCard, Button } from 'react-bootstrap';
import time from '../utilities/time';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  card: {
    cursor: 'pointer'
  },
  fontSm7: {
    fontSize: '.7em'
  },
  fontSm6: {
    fontSize: '.6em'
  }
}

class Card extends React.Component {
  render () {
    return (
      <BCard className={`mt-2 ${this.props.active ? 'border-primary' : ''}`} onClick={() => { this.props.fetchPatientCase(this.props.patientCase.id) }} style={styles.card}>
        <BCard.Body>
          <BCard.Title className="m-0">
            <div className="d-flex justify-content-between">
              <span className="font-weight-light" style={styles.fontSm7}>Case {this.props.patientCase.attributes.case_id}</span>
              <span className="font-weight-lighter text-muted" style={styles.fontSm6}>{time.fromNow(this.props.patientCase.attributes.created_at)}</span>
            </div>
            <h2 className="h5 font-weight-lighter font-weight-light m-0">{this.props.patientCase.attributes.title}</h2>
          </BCard.Title>
        </BCard.Body>
      </BCard>
    );
  }
}

Card.propTypes = {
  patientCase: PropTypes.object.isRequired,
  fetchPatientCase: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default Card;
