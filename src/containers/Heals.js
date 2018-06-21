import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from '../native/components/Loading';
import Error from '../native/components/Error';

const GET_HEALS = gql`
    query getHeals {
       heals {
           id,
           time
       } 
    }
`

class Heals extends Component {
  static propTypes = {  
    Layout: PropTypes.func.isRequired
  }

  render() {
    const { Layout } = this.props;
    console.log("TF2")
    return (
      <Query query={GET_HEALS}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Heals);
