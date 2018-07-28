import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_NOTIFICATIONS = gql`
    query getNotifications {
       notifications {
           id,
           name,
           description,
           time
       } 
    }
`

class Dashboard extends Component {
  static propTypes = {  
    Layout: PropTypes.func.isRequired
  }

  render() {
    const { Layout } = this.props;
    console.log("TF2")
    return (
      <Query query={GET_NOTIFICATIONS}>
        {({loading, error, data}) =>  {
          return <Layout data={data} error={error} loading={loading} />
        }}
      </Query>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
