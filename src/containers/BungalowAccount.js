

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_ACCOUNT = gql`
    query getAccount($id: String!) {
        account(id: $id) {
            id,
            time,
            name,
            report {
                fullfillmentRate,
                daySet {
                    time,
                    balance
                }
            },
            transactionSet {
                time,
                name,
                amount,
                balance
            },
            effortSet {
                id,
                time
            }
        }
    }
`

class BungalowAccount extends Component {
  static propTypes = {  
    Layout: PropTypes.func.isRequired
  }

  render() {
    const { Layout, match } = this.props;
    console.log("TF2")
    return (
      <Query query={GET_ACCOUNT} variables={{id: match.params.id}}>
        {({loading, error, data}) =>  {
            console.log(loading, error ,data)
            return <Layout result={data} error={error} loading={loading} />
        }}
      </Query>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(BungalowAccount);
