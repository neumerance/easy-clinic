import React from 'react';
import PropTypes from 'prop-types';
import { truncate } from '../utilities/string'

const styles = {
  photo: {
    width: '40px',
    height: '40px',
    borderRadius: '50%'
  }
}

class Header extends React.Component {
  render() {
    if (!this.props.patientCase) { return '' }

    const patientCaseAttr = this.props.patientCase.attributes
    const patient = patientCaseAttr.patient.profile

    return (
      <div className={this.props.className} className="d-flex justify-content-between align-items-center pr-4 pt-2 pb-2 pl-4 bg-light border-bottom shadow-sm">
        <div className="d-flex align-items-center">
          <img style={styles.photo} className="mr-3 border" src={patient.photo} />
          <span className="h5 m-0">{`${patientCaseAttr.title.slice(0, 35)}${patientCaseAttr.title.length > 35 ? '...' : ''}`}</span>
        </div>
        <span className="flex-shrink-1">Case #: {patientCaseAttr.case_id}</span>
      </div>
    )
  }
}

Header.propTypes = {
  className: PropTypes.string,
  patientCase: PropTypes.object
}

export default Header;
