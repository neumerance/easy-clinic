import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons'

const BLUE = '#0084ff';

const styles = {
  field: {
    borderRadius: '1.3em'
  }
}

class CommentField extends React.Component {
  render() {
    return (
      <div className={`${this.props.className} d-flex align-items-center pr-4 pt-2 pb-2 pl-4 bg-light border-bottom shadow-sm`}>
        <FontAwesomeIcon className="mr-2" size="lg" icon={faCamera} color={BLUE} />
        <FontAwesomeIcon className="mr-2" size="lg" icon={faPaperclip} color={BLUE} />
        <Form.Control className="flex-grow-1 mr-2" style={styles.field} placeholder="Comment here..." />
        <FontAwesomeIcon size="lg" icon={faPaperPlane} color={BLUE} />
      </div>
    )
  }
}

CommentField.propTypes = {
  className: PropTypes.string || PropTypes.undefined
}

export default CommentField;
