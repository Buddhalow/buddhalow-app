import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { PRODUCT } from 'react-native-dotenv';

const GET_ACHIEVEMENTS = gql`
    query getAchievements($product: String!) {
       achievements(product: $product) {
           id,
           time,
           achievementType {
               name
           }
       } 
    }
`

class Achievements extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
  }

  render() {
    const { Layout } = this.props;
    console.log('Loading achievement');
    return (
      <Query query={GET_ACHIEVEMENTS} variables={{ product: PRODUCT }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);
