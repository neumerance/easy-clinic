import React from "react"
import PropTypes from "prop-types"
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cards extends React.Component {
  render () {
    return (
      <div className={this.props.className}>
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
      </div>
    );
  }
}

Cards.propTypes = {
  className: PropTypes.string || PropTypes.undefined
}

export default Cards;
