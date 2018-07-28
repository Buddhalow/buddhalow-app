import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_HOUSING = gql`
    query getHousing {
        bungalows {
            id,
            name,
            time,
            balance,
            leaved
        }
    }
`

class Housing extends Component {
  static propTypes = {  
    Layout: PropTypes.func.isRequired
  }

  render() {
    const { Layout } = this.props;
    console.log("TF2")
    return (
      <Query query={GET_HOUSING}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Housing);
