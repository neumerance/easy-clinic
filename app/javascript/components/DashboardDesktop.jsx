import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchPatientCases } from '../store/actions/patientCaseActions';
import PatientCase from './PatientCases';
import PatientConversation from './PatientConversation';
import FrabricBG from './assets/fabric.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardDesktop.css'

const fabricBGStyles = {
  background: `url("${FrabricBG}") repeat`
}

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchPatientCases({});
  }

  render () {
    return (
      <React.Fragment>
        <Container fluid>
          <Row className="fullHeight">
            <Col className="positionRelative" style={fabricBGStyles} xs={12} lg={4}>
              <PatientCase.Filters className="mt-3 mb-3" />
              <PatientCase.Cards className="fullHeight scrollable pb-30p" />
            </Col>
            <Col className="border-right border-left pl-0 pr-0" xs={12} lg={5}>
              <PatientConversation.Header />
              <PatientConversation.Conversations className="fullHeight scrollable pb-30p" />
              <PatientConversation.CommentField className="commentField" />
            </Col>
            <Col style={fabricBGStyles} xs={12} lg={3}>
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
