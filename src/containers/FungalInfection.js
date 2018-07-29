import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_FUNGAL_INFECTION = gql`
    query getInfection($id: String!) {
        infection(id: $id) {
            id,
            time,
            name,
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
    console.log("TF2")
    return (
      <Query query={GET_FUNGAL_INFECTION} variables={{id: match.params.id}}>
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
