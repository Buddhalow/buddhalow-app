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

import numeral from 'numeral'
import moment from 'moment'

const ArchievementsComponent = ({
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

  let archievements = data.archievements

  console.log(archievements)

  const keyExtractor = item => item.id; 

  const onPress = item => {};
  if (!archievements) return <Error content={'Archievements cannot be NULL'} />
  archievements = archievements.map (o => {
      return {
          id: o.id,
          time: o.time,
          name: o.archievementType.name
      }
  })
  return (
    <Container style={{'backgroundColor': '#fff'}}> 
      <Content padder >
        <Text style={{textAlign: 'right', fontWeight: 'bold', fontSize: 120}}>000 000,00</Text>
        <Text style={{textAlign: 'right'}}>karma</Text>

        <FlatList
          numColumns={5}
          data={archievements}
          renderItem={({ item }) => (
            <Card transparent>
              <CardItem cardBody style={{backgroundColor: '#FFffee'}}>
                <Body style={{ padding: 12, backgroundColor: '#FFffee' }}>
                  <Text style={{ fontWeight: '800' }}>{item.name}</Text>
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

ArchievementsComponent.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  archievements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

ArchievementsComponent.defaultProps = {
  error: null,
  reFetch: null,
};

export default ArchievementsComponent;  
