import React from 'react';
import PropTypes from 'prop-types';

class TextDivider extends React.Component {
  render() {
    const line = this.props.showLines ? 'border-top' : '';
    return (
      <div className={`${this.props.className} d-flex align-items-center mt-3 mb-3`}>
        <span className={`${line} flex-grow-1`}></span>
        <span className="mr-3 ml-3 text-secondary">{this.props.children}</span>
        <span className={`${line} flex-grow-1`}></span>
      </div>
    )
  }
}

TextDivider.propTypes = {
  className: PropTypes.string,
  showLines: PropTypes.bool
}

export default TextDivider;
