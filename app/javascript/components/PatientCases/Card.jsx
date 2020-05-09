import React from "react"
import PropTypes from "prop-types"
import { Card as BCard, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Card extends React.Component {
  componentWillMount() {
    // this.props.fetchPatientCases();
  }

  render () {
    return (
      <BCard className="mt-2">
        <BCard.Body>
          <BCard.Title>
            <small>Case 32131233</small>
            <h2 className="h5 font-weight-lighter font-weight-light">Having a headache</h2>
          </BCard.Title>
          <BCard.Text className="text-truncate font-weight-light">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </BCard.Text>
        </BCard.Body>
      </BCard>
    );
  }
}

export default Card;
