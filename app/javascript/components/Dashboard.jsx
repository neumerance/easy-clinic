import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchPatientCases } from '../store/actions/patientCaseActions';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchPatientCases({});
  }

  render () {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col xs={12} lg={8}>
              Left
            </Col>
            <Col xs={12} lg={4}>
              Right
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  patientCases: PropTypes.array
}

const mapStateToProps = state => ({
  patientCases: state.patientCase.patientCases,
});

export default connect(mapStateToProps, { fetchPatientCases })(Dashboard);
