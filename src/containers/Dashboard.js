import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {Redirect} from "react-router-dom";

const GET_NOTIFICATIONS = gql`
    query getNotifications {
       notifications {
           id,
           name,
           description,
           time
       },
       entityStates {
         id,
         yin,
         yang,
         anxiety,
         ignition,
         bowelYin,
         bowelYang,
         value,
         focusness,
         irritability,
         time
       }
    }
`

class Dashboard extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired
  }

  render() {
    const { Layout, member } = this.props;
    console.log("TF2")
    if (!localStorage.getItem('@Buddhalow:session')) {
      return <Redirect to="/login" />;
    }
    return (
      <Query query={GET_NOTIFICATIONS}>
        {({loading, error, data}) =>  {
          console.log(data)
          return <Layout data={data} error={error} loading={loading} />
        }}
      </Query>
    )
  }
}

const mapStateToProps = state => ({
  member: state.member,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
