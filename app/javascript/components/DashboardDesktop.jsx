import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchPatientCase, fetchPatientCases, setPatientCaseFilters } from '../store/actions/patientCaseActions';
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
    this.props.fetchPatientCases(this.props.filters);
  }

  componentWillReceiveProps(props) {
    if (props.patientCases.length && !this.props.patientCase) {
      this.props.fetchPatientCase(props.patientCases[0].id);
    }
  }

  render () {
    return (
      <React.Fragment>
        <Container fluid>
          <Row className="fullHeight">
            <Col className="positionRelative" style={fabricBGStyles} xs={12} lg={4}>
              <PatientCase.Filters filters={this.props.filters} onFilterChange={this.props.setPatientCaseFilters} className="mt-3 mb-3" />
              <PatientCase.Cards 
                className="fullHeight scrollable pb-30p" 
                patientCases={this.props.patientCases}
                fetchPatientCase={this.props.fetchPatientCase}
              />
            </Col>
            <Col className="border-right border-left pl-0 pr-0" xs={12} lg={5}>
              <PatientConversation.Header patientCase={this.props.patientCase} />
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
  patientCase: state.patientCase.patientCase,
  patientCases: state.patientCase.patientCases,
  filters: state.patientCase.patientCaseFilters
});

export default connect(mapStateToProps, {
  fetchPatientCase,
  fetchPatientCases,
  setPatientCaseFilters
})(Dashboard);
