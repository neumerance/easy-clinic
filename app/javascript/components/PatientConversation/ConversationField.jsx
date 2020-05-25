import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons'

const BLUE = '#0084ff';

const styles = {
  field: {
    borderRadius: '1.3em'
  },
  sendBtn: {
    cursor: 'pointer'
  }
}

class ConversationField extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      message: ''
    }
  }

  onSend() {
    this.props.sendMessage(
      this.props.patientCase.id,
      {
        conversation: {
          content: this.state.message
        }
      }
    );
    this.setState({ message: '' });
  }

  onChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div className={`${this.props.className} d-flex align-items-center pr-4 pt-2 pb-2 pl-4 bg-light border-bottom shadow-sm`}>
        <FontAwesomeIcon className="mr-2" size="lg" icon={faCamera} color={BLUE} />
        <FontAwesomeIcon className="mr-2" size="lg" icon={faPaperclip} color={BLUE} />
        <Form.Control
          value={this.state.message}
          className="flex-grow-1 mr-2"
          style={styles.field}
          placeholder="Comment here..."
          onChange={this.onChange}
        />
        <a onClick={() => {this.onSend()}} style={styles.sendBtn}>
          <FontAwesomeIcon
            size="lg"
            icon={faPaperPlane}
            color={BLUE}
          />
        </a>
      </div>
    )
  }
}

ConversationField.propTypes = {
  className: PropTypes.string,
  sendMessage: PropTypes.func.isRequired,
  patientCase: PropTypes.object.isRequired
}

export default ConversationField;

