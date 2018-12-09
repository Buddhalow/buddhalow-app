import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { setHeaderImageUrl } from '../actions/ui';

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
    const { Layout, setHeaderImageUrl } = this.props;
    setHeaderImageUrl('https://cdn.buddhalow.com/salad.jpg');
    console.log("TF2")
    return (
      <Query query={GET_HEALS}>
        {({loading, error, data}) =>  {
          return <Layout data={data} error={error} setHeaderImageUrl={setHeaderImageUrl} loading={loading} />
        }}
      </Query>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  setHeaderImageUrl,
};

export default connect(mapStateToProps, mapDispatchToProps)(Heals);
