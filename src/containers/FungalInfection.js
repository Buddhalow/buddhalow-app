import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import moment from "moment";

const GET_FUNGAL_INFECTION = gql`
    query getInfection($id: String!, $start: String!, $end: String!) {
        infection(id: $id) {
            id,
            time,
            name,
            days(start: $start, end: $end) {
              id,
              balance,
              time
            },
            report {
                fullfillmentRate,
                fungaldaySet {
                    time,
                    balance
                }
            },
            fungaltransactionSet {
                time,
                name,
                amount,
                balance
            },
            fungaltreatmentSet {
                id,
                time
            }
        }
    }
`

class FungalInfection extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired
  }

  render() {
    const { Layout, match } = this.props;
    return (
      <Query query={GET_FUNGAL_INFECTION} variables={{id: match.params.id, start: match.params.end || moment().subtract(7, 'days').format('YYYY-MM-DD'), end: match.params.start || moment().format('YYYY-MM-DD')}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(FungalInfection);
