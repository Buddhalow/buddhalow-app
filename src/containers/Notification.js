import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Notification extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired
  }

  render = () => {
    const { Layout, notification } = this.props;

    return <Layout notification={notification} />;
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
