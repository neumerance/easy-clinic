import React from "react"
import PropTypes from "prop-types"
import PatientCase from './PatientCases';
import PatientConversation from './PatientConversation';
import FrabricBG from './assets/fabric.png';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  fetchPatientCase,
  fetchPatientCases,
  setPatientCaseFilters,
  appendPatientCase,
  loadMorePatientCases
} from '../store/actions/patientCaseActions';
import {
  fetchMessages,
  sendMessage
} from '../store/actions/patientCaseConversationAction';
import PatientCasesChannel from '../channels/PatientCasesChannel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardDesktop.css'

const fabricBGStyles = {
  background: `url("${FrabricBG}") repeat`
}

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchPatientCases({
      ...this.props.filters,
      page: this.props.meta ? this.props.meta.next_page : 1
    });
  }

  componentDidMount() {
    PatientCasesChannel(this.props.appendPatientCase);
  }

  componentWillReceiveProps(props) {
    if (props.patientCases.length && !props.patientCase) {
      this.props.fetchPatientCase(props.patientCases[0].id);
    }
  }

  render () {
    let conversationSection = <PatientConversation.NoPatientSelected />;

    if (this.props.patientCase) {
      conversationSection = <React.Fragment>
                              <PatientConversation.Header patientCase={this.props.patientCase} />
                              <PatientConversation.Conversations conversations={this.props.patientCaseConversations} className="fullHeight scrollable pb-30p" />
                              <PatientConversation.CommentField className="commentField" />
                            </React.Fragment>
    }

    return (
      <React.Fragment>
        <Container fluid>
          <Row className="fullHeight">
            <Col className="positionRelative" style={fabricBGStyles} xs={12} lg={4}>
              <PatientCase.Filters filters={this.props.filters} onFilterChange={this.props.setPatientCaseFilters} className="mt-3 mb-3" />
              <PatientCase.Cards
                className="fullHeight scrollable pb-30p"
                patientCase={this.props.patientCase}
                patientCases={this.props.patientCases}
                fetchPatientCase={this.props.fetchPatientCase}
              >
                <PatientCase.LoadMoreBtn
                  filters={this.props.filters}
                  pagination={this.props.patientCasePagination}
                  loadMorePatientCases={this.props.loadMorePatientCases}
                  className="btn-block mt-2"
                />
              </PatientCase.Cards>
            </Col>
            <Col className="border-right border-left pl-0 pr-0" xs={12} lg={5}>
              { conversationSection }
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
  filters: state.patientCase.patientCaseFilters,
  patientCasePagination: state.patientCase.pagination,
  patientCaseConversations: state.patientCaseConversations.conversations,
});

export default connect(mapStateToProps, {
  fetchPatientCase,
  fetchPatientCases,
  setPatientCaseFilters,
  appendPatientCase,
  loadMorePatientCases,
  fetchMessages,
  sendMessage
})(Dashboard);
