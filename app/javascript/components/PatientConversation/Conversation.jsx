import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const BLUE = '#0084ff';
const WHITE = '#FFFFFF';
const LIGHT = '#f1f0f0'
const DARK = '##1c1e21'

const left = {
  top: {
    borderRadius: '1.3em 1.3em 1.3em 0'
  },
  middle: {
    borderRadius: '0 1.3em 1.3em 0'
  },
  bottom: {
    borderRadius: '0 1.3em 1.3em 1.3em'
  },
}

const right = {
  top: {
    borderRadius: '1.3em 1.3em 0 1.3em'
  },
  middle: {
    borderRadius: '1.3em 0 0 1.3em'
  },
  bottom: {
    borderRadius: '1.3em 0 1.3em 1.3em'
  }
}

const rounded = { right, left}

const bubbleStyles  = {
  right: {
    background: BLUE,
    color: WHITE
  },
  left: {
    background: LIGHT,
    color: DARK
  }
}

const status = {
  sending: <FontAwesomeIcon icon={faCheckCircle} color={LIGHT} />,
  sent: <FontAwesomeIcon icon={faCheckCircle} color={BLUE} />
}

class Conversation extends React.Component {
  messageStyles() {
    let styles = {
      ...rounded[this.props.direction][this.props.alignment],
      ...bubbleStyles[this.props.direction],
      maxWidth: '60%'
    };
    return styles;
  }

  message() {
    return (
      <div style={this.messageStyles()} className="pr-3 pl-3 pt-2 pb-2">
        <p className={`text-${this.props.direction}`}>{this.props.text}</p>
        <div className="d-flex flex-wrap justify-content-end">
          {this.props.children}
        </div>
      </div>
    )
  }

  render() {
    const speech = [
      status[this.props.status],
      this.message()
    ]

    return (
      <div className={`${this.props.className} d-flex justify-content-between align-items-end mb-1`}>
        {this.props.direction === 'left' ? speech.reverse() : speech}
      </div>
    )
  }
}

Conversation.propTypes = {
  className: PropTypes.string || PropTypes.undefined,
  direction: PropTypes.string, // left, right
  text: PropTypes.string || PropTypes.undefined,
  alignment: PropTypes.string, // top, middle, bottom,
  status: PropTypes.string // sending, sent, read
}

export default Conversation;
