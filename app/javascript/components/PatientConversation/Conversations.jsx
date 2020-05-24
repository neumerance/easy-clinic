import React from 'react';
import PropTypes from "prop-types";
import Conversation from './Conversation';
import Shared from '../Shared';

class Conversations extends React.Component {
  render() {
    const conversations = this.props.conversations.map(conversation => {
      return <Conversation
              text={conversation.attributes.content}
              owner={conversation.attributes.owner}
              status={conversation.attributes.status}>
            </Conversation>
    });
    return (
      <div className="d-flex align-items-end ml-4 mr-4">
        <div className={`${this.props.className} flex-grow-1`}>
          {conversations}
        </div>
      </div>
    )
  }
}

Conversations.propTypes = {
  className: PropTypes.string,
  conversations: PropTypes.array.isRequired
}

export default Conversations;
