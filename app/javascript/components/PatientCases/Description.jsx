import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons'

const styles = {
  accordion: {
    zIndex: '1050',
    marginTop: '-27px',
    background: 'none'
  },
  heart: {
    borderRadius: '50%',
    padding: '8px 13px 8px 13px'
  }
}

class Description extends React.Component {
  renderDescription() {
    return this.props.text.split('\n').map(i => {
      return <p>{i}</p>
    });
  }

  render() {
    return (
      <Accordion>
        <Card className="border-0 border-bottom" style={styles.accordion}>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="pb-0">
              <div className="pt-4">
                {this.renderDescription()}
              </div>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Toggle className="p-0" as={Button} variant="link" eventKey="0">
            <span className="d-flex align-items-center">
              <span className="flex-grow-1 border-bottom"></span>
              <span className="border shadow-sm bg-light" style={styles.heart}>
                <FontAwesomeIcon className="text-danger" icon={faNotesMedical} size="2x" />
              </span>
              <span className="flex-grow-1 border-bottom"></span>
            </span>
          </Accordion.Toggle>
        </Card>
      </Accordion>
    );
  }
}

Description.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Description;
