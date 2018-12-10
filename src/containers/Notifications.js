import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { PRODUCT } from 'react-native-dotenv'

const GET_NOTIFICATIONS = gql`
    query getNotifications($product: String!) {
       notifications(product: $product) {
           id,
           name,
           description,
           time
       } 
    }
`

class Notifications extends Component {
  static propTypes = {  
    Layout: PropTypes.func.isRequired
  }

  render() {
    const { Layout } = this.props;
    console.log("TF2")
    return (
      <Query query={GET_NOTIFICATIONS} variables={{product: PRODUCT}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
