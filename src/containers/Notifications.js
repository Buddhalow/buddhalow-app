import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Notifications extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired
  }

  render = () => {
    const { Layout, notifications } = this.props;

    return <Layout notifications={notifications} />;
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
