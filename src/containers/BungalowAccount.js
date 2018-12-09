

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from "moment";

const GET_ACCOUNT = gql`
    query getAccount($id: String!) {
        account(id: $id) {
            id,
            time,
            name,
            days {
              time,
              balance
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
      <Query query={GET_ACCOUNT} variables={{id: match.params.id, start: match.params.start || moment().subtract(7, 'day').format('YYYY-MM-DD'), end: match.params.end || moment().format('YYYY-MM-DD')}}>
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
