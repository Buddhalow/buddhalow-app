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
import numeral from 'numeral'

const HealsComponent = ({
  error,
  loading,
  data,
  reFetch,
}) => {
  // Loading
  console.log(loading, data, error)
  if (loading || !data) return <Loading />; 

  // Error
  if (error) return <Error content={error} />;

  let heals = data.heals

  console.log(heals)

  const keyExtractor = item => item.id; 

  const onPress = item => Actions.heal({ match: { params: { id: String(item.id) } } });
  if (!heals) return <Error content={'Heals cannot be NULL'} />
  return (
    <Container style={{'backgroundColor': '#fff'}}>
      <Content padder>
        <FlatList
          flexGrow={1}
          numColumns={1}
          data={heals}
          renderItem={({ item }) => (
            <Card transparent>
              <CardItem cardBody style={{backgroundColor: '#ddd'}}>
                <Body style={{ padding: 12, backgroundColor: '#ddd'}}>
                 <Text style={{ fontWeight: '800' }}>Healthy meal</Text>
                </Body>
              </CardItem>
              <CardItem>
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
};

HealsComponent.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  heals: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

HealsComponent.defaultProps = {
  error: null,
  reFetch: null,
};

export default HealsComponent;  
