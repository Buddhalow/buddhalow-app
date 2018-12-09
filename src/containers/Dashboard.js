import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';

import { PRODUCT } from 'react-native-dotenv';

let GET_DASHBOARD = gql`
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
`;

switch (PRODUCT) {
  case 'cravity':
    GET_DASHBOARD = gql`
      query getDashboard {
        notifications {
           id,
           name,
           description,
           time
        },
        cravings {
          id,
          food {
            id,
            name
          },
          time          
        }
      }
    `;
    break;
  case 'celebrify':
    GET_DASHBOARD = gql `
      query getDashboard {
        notifications {
          id,
          name,
          description,
          time
        }
        opportunities {
          name,
          description,
          time,
          status
        },
        exposures {
          name,
          description,
          time,
          status
        },
        pitchs {
          id,
          name,
          time
        },
        channels {
          id,
          type
        }
      }
    `;
    break;
  default:
    break;
}

class Dashboard extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
  }

  render() {
    const { Layout, member } = this.props;
    console.log('TF2');
    if (!localStorage.getItem('@Buddhalow:session')) {
      return <Redirect to="/login" />;
    }
    return (
      <Query query={GET_DASHBOARD}>
        {({ loading, error, data }) => {
          console.log(data);
          return <Layout data={data} error={error} loading={loading} />;
        }}
      </Query>
    );
  }
}

const mapStateToProps = state => ({
  member: state.member,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
