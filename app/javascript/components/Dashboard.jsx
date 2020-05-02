import React from "react"
import PropTypes from "prop-types"
class Dashboard extends React.Component {
  render () {
    return (
      <React.Fragment>
        { this.props.greeting }
      </React.Fragment>
    );
  }
}

export default Dashboard;