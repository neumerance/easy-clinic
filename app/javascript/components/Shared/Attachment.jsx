import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from 'react-bootstrap';
import {
  faFilm, faImages, faFile, faItunesNote, faFilePdf,
  faFileWord, faPaperclip, faPlayCircle, faCheckCircle
} from '@fortawesome/free-solid-svg-icons'


class Attachment extends React.Component {
  render() {
    const dimensions = {
      lg: {
        width: '5em',
        height: '4.2em'
      },
      sm: {
        width: '3em',
        height: '2.2em'
      }
    }

    const styles = {
      card: {
        width: dimensions[this.props.size].width
      },
      thumb: {
        lineHeight: dimensions[this.props.size].height
      }
    }

    const iconSize = this.props.size

    const attachmentDefinitions = {
      pdf: {
        icon: <FontAwesomeIcon icon={faFilePdf} size={this.props.size} />
      },
      doc: {
        icon: <FontAwesomeIcon icon={faFileWord} size={this.props.size} />
      },
      image: {
        icon: <FontAwesomeIcon icon={faImages} size={this.props.size} />
      },
      video: {
        icon: <FontAwesomeIcon icon={faImages} size={this.props.size} />,
        playable: true
      },
      audio: {
        icon: <FontAwesomeIcon icon={faFilm} size={this.props.size} />,
        playable: true
      },
      other: {
        icon: <FontAwesomeIcon icon={faPaperclip} size={this.props.size} />
      }
    }

    const playIcon = <FontAwesomeIcon icon={faPlayCircle} size={this.props.size} />
    const spinnerIcon = <FontAwesomeIcon icon="spinner" size="xs" />

    let centerIcon = attachmentDefinitions[this.props.contentType].icon;
    let statusIcon = <FontAwesomeIcon icon={faCheckCircle} size="xs" />

    if (attachmentDefinitions[this.props.contentType].playable) {
      centerIcon = playIcon;
    }

    return (
      <Card className="p-1 bg-light m-1" style={styles.card}>
        <a className="text-center bg-light text-dark rounded" style={styles.thumb}>
          {centerIcon}
        </a>
      </Card>
    )
  }
}

Attachment.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  contentType: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default Attachment;
