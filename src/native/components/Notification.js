import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, H3, List, ListItem, Text } from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';
import gql from 'graphql-tag'
import graphql from 'apollo-client'
import { Query } from "react-apollo";

const GET_NOTIFICATIONS = gql`
    query getNotification($id: String!) {
        notification(id: $id) {
            name,
            id,
            time,
            description
        }
    }
`

const NotificationComponent = ({
  error,
  data: {
    notification,
    loading
  },
  recipeId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Recipe not found
  if (!notification) return <Error content={ErrorMessages.recipe404} />;

  return (
    <Query query={query}>
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <H3>{notification.name}</H3>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{notification.description}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </Query>
  );
};

NotificationComponent.propTypes = {
  error: PropTypes.string,
  notificationId: PropTypes.string.isRequired
};

NotificationComponent.defaultProps = {
  error: null,
};

export default NotificationComponent
