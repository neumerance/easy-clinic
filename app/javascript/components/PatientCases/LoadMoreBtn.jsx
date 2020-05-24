import  React from 'react';
import  PropTypes from 'prop-types';
import  { Button } from 'react-bootstrap';

class LoadMoreBtn extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.loadMorePatientCases({
      ...this.props.filters,
      page: this.props.pagination.next_page
    });
  }

  render() {
    if (this.props.pagination && this.props.pagination.next_page) {
      return <Button className={this.props.className} variant="light" onClick={this.onClick}>Load More</Button>;
    } else {
      return '';
    }
  }
}

LoadMoreBtn.propTypes = {
  className: PropTypes.string,
  loadMorePatientCases: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired
}

export default LoadMoreBtn;
