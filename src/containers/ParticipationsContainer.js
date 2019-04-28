import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_PARTICIPATIONS = gql`
    query getParticipations($product: String!) {
       achievements(product: $product) {
         id,
         participated,
         segment {
          id,
          name,
          broadcasted,
          episode {
            broadcasted,
            season {
              id,
              name,
              number
              show {
                id,
                name
              }
             }
          }
         }
       } 
    }
`

class ParticipationsContainer extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
  }

  render() {
    const { Layout } = this.props;
    console.log('Loading television participations');
    return (
      <Query query={GET_PARTICIPATIONS}>
        {({ loading, error, data, refetch }) => (
          <Layout data={data} error={error} loading={loading} refetch={refetch} />
        )}
      </Query>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ParticipationsContainer);
