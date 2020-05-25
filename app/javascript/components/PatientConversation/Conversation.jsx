import React from 'react';
import PropTypes from "prop-types";
import Shared from '../Shared';
import time from '../utilities/time';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const BLUE = '#0084ff';
const WHITE = '#FFFFFF';
const LIGHT = '#f1f0f0'
const DARK = '##1c1e21'

const status = {
  sent: <FontAwesomeIcon icon={faCheckCircle} color={LIGHT} />,
  read: <FontAwesomeIcon icon={faCheckCircle} color={BLUE} />
}

const styles = {
  timestamp: {
    fontSize: '.8em'
  }
}

class Conversation extends React.Component {
  render() {
    const sender = this.props.owner;
    return (
      <div className={`${this.props.className} mb-1`}>
        <div className="pr-3 pl-3 pt-2 pb-2">
          <div className="d-flex align-items-start">
            <Shared.Avatar src={sender.photo} isOnline={sender.online} size="sm" className="mr-2" />
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start">
                <span className="h6 font-weight-light mb-0">{sender.name}</span>
                <span>
                  <span className="mr-2 text-muted" style={styles.timestamp}>{time.fromNow(this.props.timestamp)}</span>
                  {status[this.props.status]}
                </span>
              </div>
              {this.props.text}
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-end">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

Conversation.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  status: PropTypes.string,
  owner: PropTypes.object.isRequired,
  timestamp: PropTypes.string.isRequired
}

export default Conversation;
