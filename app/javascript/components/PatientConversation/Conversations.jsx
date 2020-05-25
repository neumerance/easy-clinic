import React from 'react';
import PropTypes from "prop-types";
import Conversation from './Conversation';
import Shared from '../Shared';

class Conversations extends React.Component {
  render() {
    const conversations = this.props.conversations.map((conversation, idx) => {
      return <Conversation
              key={`conversation${conversation.id}${idx}`}
              text={conversation.attributes.content}
              owner={conversation.attributes.owner}
              status={conversation.attributes.status}
              timestamp={conversation.attributes.created_at}>
            </Conversation>
    });
    return (
      <div className={`d-flex flex-column-reverse justify-content-end`}>
       <div className={`${this.props.className} d-flex flex-column-reverse`}>
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
