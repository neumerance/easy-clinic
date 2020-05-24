import React from 'react';
import PropTypes from 'prop-types';

const LIGHT = '#f1f0f0'
const GREEN = '#28a745'

class Avatar extends React.Component {
  render() {
    const baseStyles = {
      borderRadius: '50%'
    }
    const styles = {
      online: {
        borderColor: GREEN
      },
      offline: {
        borderColor: LIGHT
      },
      xs: {
        ...baseStyles,
        width: '1.3em',
        height: '1.3em',
        border: `.08em solid`
      },
      sm: {
        ...baseStyles,
        width: '2.1em',
        height: '2.1em',
        border: `.1em solid`
      },
      md: {
        ...baseStyles,
        width: '2.5em',
        height: '2.5m',
        border: `.15em solid`
      }
    }

    return(
      <span className={this.props.className}>
        <img src={this.props.src} style={{...styles[this.props.size], ...styles[this.props.isOnline]}} />
      </span>
    )
  }
}

Avatar.propTypes = {
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}

export default Avatar;
