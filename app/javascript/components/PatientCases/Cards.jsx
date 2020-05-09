import React from "react"
import PropTypes from "prop-types"
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cards extends React.Component {
  componentWillMount() {
    // this.props.fetchPatientCases();
  }

  render () {
    return (
      <React.Fragment>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </React.Fragment>
    );
  }
}

export default Cards;
