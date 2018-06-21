import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_ARCHIEVEMENTS = gql`
    query getArchivements {
       archievements {
           id,
           archievementType {
               name
           }
       } 
    }
`

class Archievements extends Component {
  static propTypes = {  
    Layout: PropTypes.func.isRequired
  }

  render() {
    const { Layout } = this.props;
    console.log("Loading archievement")
    return (
      <Query query={GET_ARCHIEVEMENTS}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Archievements);
