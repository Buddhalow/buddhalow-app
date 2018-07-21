import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity, RefreshControl, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import gql from 'graphql-tag'
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';
import moment from 'moment'

class NotificationsComponent extends React.Component {
  render() {
    let {
      error,
      loading,
      data,
      reFetch,
    } = this.props
    // Loading
    console.log(loading, data, error)
    if (loading || !data) return <Loading />; 

    // Error
    if (error) return <Error content={error} />;

    let notifications = data.notifications

    console.log(notifications)

    const keyExtractor = item => item.id; 

    const onPress = item => Actions.notification({ match: { params: { id: String(item.id) } } });
    if (!notifications) return <Error content={'Notifications cannot be NULL'} />
    return (
      <Container style={{'backgroundColor': '#fff'}}>
        <Content padder>
          <FlatList
            numColumns={1}
            data={notifications}
            renderItem={({ item }) => (
              <Card transparent style={{ padding: 56 }}>
                
                <CardItem cardBody>
                  <Body style={{ padding: 28, backgroundColor: '#eee'}}>
                    <Text style={{ fontWeight: '800' }}>{item.name}</Text>
                  </Body>
                </CardItem>
                <CardItem cardBody style={{padding: 28}}>
                  <Body>
                    <Text>{moment(item.time).fromNow()}</Text>
                  </Body>
                </CardItem>
              </Card>
            )}
            keyExtractor={keyExtractor}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={reFetch}
              />
            }
          />

          <Spacer size={20} />
        </Content>
      </Container>
    );
  }
}

NotificationsComponent.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

NotificationsComponent.defaultProps = {
  error: null,
  reFetch: null,
};

export default NotificationsComponent;  
