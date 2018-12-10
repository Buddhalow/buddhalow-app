import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';
import { setHeaderImageUrl } from '../actions/ui';

import { PRODUCT } from 'react-native-dotenv';

let GET_DASHBOARD = gql`
    query getNotifications {
       notifications {
           id,
           name,
           description,
           time
       }
    }
`;

switch (PRODUCT) {
  case 'buddhalow':
    GET_DASHBOARD = gql`
      query getNotifications {
         notifications {
             id,
             name,
             description,
             time
         },
         entityStates {
            time,
            yin,
            yang
         }
      }
    `;
    break;
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
          time,
          reason {
            id,
            name
          }
        },
        seminations {
          id,
          restaurant {
            id,
            name
          },
          seminated
        },
        statistics {
          cravings,
          date,
          healings,
          seminations,
        },
        summary {
          costs
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
        },
        opportunities {
          pitch {
            name,
            channel {
              id
            }
          },
          created,
          status
        },
        exposures {
          id,
          opportunity {
            id,
            pitch {
              id,
              name,
              channel {
                id
              }
            }
          }
        },
        pitches {
          id,
          name,
          pitched,
          channel {
            id
          }
        },
        channels {
          id
        },
        summary {
          pitches,
          reach,
          exposures
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
    const { Layout, member, setHeaderImageUrl } = this.props;
    console.log('TF2');
    if (!localStorage.getItem('@Buddhalow:session')) {
      return <Redirect to="/login" />;
    }
    setHeaderImageUrl('');  
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
  setHeaderImageUrl
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
