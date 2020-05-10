import React from 'react';
import PropTypes from "prop-types";
import Conversation from './Conversation';
import Shared from '../Shared';

class Conversations extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-end ml-4 mr-4">
        <div className={`${this.props.className} flex-grow-1`}>
          <Conversation text="fsdafadsfsadfsdafasf" direction="left" alignment="top" status="sent" />
          <Conversation text="fdsafasdfsdfsa" direction="left" alignment="middle" status="sent" />
          <Conversation text="fdsfsadf sadfasdfasd fsad fsda fsda" direction="left" alignment="middle" status="sent" />
          <Conversation text="324rfdsafsdfas fasdfsad fsadf sdaf" direction="left" alignment="bottom" status="sending" />
          <Conversation text="fsdafadsfsadfsdafasf" direction="right" alignment="top" status="sent" />
          <Conversation text="fdsafasdfsdfsa" direction="right" alignment="middle" status="sent" />
          <Conversation text="fdsfsadf sadfasdfasd fsad fsda fsda" direction="right" alignment="middle" status="sent" />
          <Conversation text="324rfdsafsdfas fasdfsad fsadf sdaf" direction="right" alignment="bottom" status="sending" />
          <Conversation text="fsdafadsfsadfsdafasf" direction="left" alignment="top" status="sent" />
          <Conversation text="fdsafasdfsdfsa" direction="left" alignment="middle" status="sent" />
          <Conversation text="fdsfsadf sadfasdfasd fsad fsda fsda" direction="left" alignment="middle" status="sent" />
          <Conversation text="324rfdsafsdfas fasdfsad fsadf sdaf" direction="left" alignment="bottom" status="sending" />
          <Conversation text="fsdafadsfsadfsdafasf" direction="right" alignment="top" status="sent" />
          <Conversation text="fdsafasdfsdfsa" direction="right" alignment="middle" status="sent" />
          <Conversation text="fdsfsadf sadfasdfasd fsad fsda fsda" direction="right" alignment="middle" status="sent" />
          <Conversation text="324rfdsafsdfas fasdfsad fsadf sdaf" direction="right" alignment="bottom" status="sending" />
          <Conversation text="fsdafadsfsadfsdafasf" direction="left" alignment="top" status="sent" />
          <Conversation text="fdsafasdfsdfsa" direction="left" alignment="middle" status="sent" />
          <Conversation text="fdsfsadf sadfasdfasd fsad fsda fsda" direction="left" alignment="middle" status="sent" />
          <Conversation text="324rfdsafsdfas fasdfsad fsadf sdaf" direction="left" alignment="bottom" status="sending" />
          <Conversation text="fsdafadsfsadfsdafasf" direction="right" alignment="top" status="sent" />
          <Conversation text="fdsafasdfsdfsa" direction="right" alignment="middle" status="sent" />
          <Conversation text="fdsfsadf sadfasdfasd fsad fsda fsda" direction="right" alignment="middle" status="sent" />
          <Conversation text="324rfdsafsdfas fasdfsad fsadf sdaf" direction="right" alignment="bottom" status="sending" />
          <Conversation text="fsdafadsfsadfsdafasf" direction="left" alignment="top" status="sent" />
          <Conversation text="fdsafasdfsdfsa" direction="left" alignment="middle" status="sent" />
          <Conversation text="fdsfsadf sadfasdfasd fsad fsda fsda" direction="left" alignment="middle" status="sent" />
          <Conversation text="324rfdsafsdfas fasdfsad fsadf sdaf" direction="left" alignment="bottom" status="sending" />
          <Conversation text="fsdafadsfsadfsdafasf" direction="right" alignment="top" status="sent" />
          <Shared.TextDivider showLines>
            <span>Kamote</span>
          </Shared.TextDivider>
          <Conversation text="fdsafasdfsdfsa" direction="right" alignment="middle" status="sent" />
          <Conversation text="fdsfsadf sadfasdfasd fsad fsda fsda" direction="right" alignment="middle" status="sent" />
          <Conversation text="324rfdsafsdfas fasdfsad fsadf sdaf" direction="right" alignment="bottom" status="sending">
            <Shared.Attachment size="lg" contentType="image" src="https://placeimg.com/80/80/any" />
            <Shared.Attachment size="lg" contentType="video" src="https://placeimg.com/80/80/any" />
            <Shared.Attachment size="lg" contentType="audio" src="https://placeimg.com/80/80/any" />
            <Shared.Attachment size="lg" contentType="pdf" src="https://placeimg.com/80/80/any" />
            <Shared.Attachment size="lg" contentType="doc" src="https://placeimg.com/80/80/any" />
            <Shared.Attachment size="lg" contentType="other" src="https://placeimg.com/80/80/any" />
            <Shared.Attachment size="lg" contentType="image" src="https://placeimg.com/80/80/any" />
            <Shared.Attachment size="lg" contentType="video" src="https://placeimg.com/80/80/any" />
            <Shared.Attachment size="lg" contentType="audio" src="https://placeimg.com/80/80/any" />
            <Shared.Attachment size="lg" contentType="pdf" src="https://placeimg.com/80/80/any" />
            <Shared.Attachment size="lg" contentType="doc" src="https://placeimg.com/80/80/any" />
            <Shared.Attachment size="lg" contentType="other" src="https://placeimg.com/80/80/any" />
          </Conversation>
        </div>
      </div>
    )
  }
}

Conversations.propTypes = {
  className: PropTypes.string || PropTypes.undefined
}

export default Conversations;
