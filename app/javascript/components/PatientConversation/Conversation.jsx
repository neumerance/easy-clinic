import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Shared from '../Shared';

const BLUE = '#0084ff';
const WHITE = '#FFFFFF';
const LIGHT = '#f1f0f0'
const DARK = '##1c1e21'

const status = {
  sending: <FontAwesomeIcon icon={faCheckCircle} color={LIGHT} />,
  sent: <FontAwesomeIcon icon={faCheckCircle} color={BLUE} />
}

class Conversation extends React.Component {
  render() {
    const sender = this.props.owner.attributes.owner;

    return (
      <div className={`${this.props.className} d-flex justify-content-between align-items-end mb-1`}>
        <div className="pr-3 pl-3 pt-2 pb-2">
          <div className="d-flex">
            <Shared.Avatar src={sender.attributes.photo} isOnline={sender.attributes.online} size="sm" className="mr-2" />
            {this.props.text}
          </div>
          <div className="d-flex flex-wrap justify-content-end">
            {this.props.children}
          </div>
        </div>
        {status[this.props.status]}
      </div>
    )
  }
}

Conversation.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  status: PropTypes.string,
  owner: PropTypes.object.isRequired
}

export default Conversation;
