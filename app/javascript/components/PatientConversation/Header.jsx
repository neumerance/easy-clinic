import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  photo: {
    width: '40px',
    height: '40px',
    borderRadius: '50%'
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className={this.props.className} className="d-flex justify-content-between pr-4 pt-2 pb-2 pl-4 bg-light border-bottom shadow-sm">
        <div className="d-flex align-items-center">
          <img style={styles.photo} className="mr-3 border" src="https://avatars.dicebear.com/v2/male/john.svg?mood[]=happy" />
          <span className="h5 m-0">Jonathan Canaveral</span>
        </div>
        <span className="flex-shrink-1">Case #: 3213123213</span>
      </div>
    )
  }
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header;
