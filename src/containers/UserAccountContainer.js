import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getMemberData, logout } from '../actions/buddhalow';

class UserAccountContainer extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    fetchMemberData: PropTypes.func,
    buddhalow: PropTypes.shape(),
    signOut: PropTypes.func
  };
  static defaultProps = {
    buddhalow: { user: null },
    fetchMemberData: null,
    signOut: null
  };
  async componentDidMount() {
    this.props.fetchMemberData();
  }

  render() {
    const { Layout, signOut } = this.props;
    return (
      <Layout logout={signOut} user={this.props.buddhalow.user} />
    );
  }
}

const mapStateToProps = state => ({
  stacksai: state.stacksai || { user: null },
});

const mapDispatchToProps = {
  fetchMemberData: getMemberData,
  signOut: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAccountContainer);
