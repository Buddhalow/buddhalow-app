import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity, RefreshControl, Image, View, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { PRODUCT } from 'react-native-dotenv'
import gql from 'graphql-tag'
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';
import Point from './Point'
import { Icon } from 'native-base';

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
  var width = (Dimensions.get('window').width / 4);
  console.log("Width of window", width)

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
        <View style={{flexDirection: 'row', padding: 56, justifyContent: 'center', alignItems: 'center'}}>
          <Point amount={100} label="KARMA" />
          <Point amount={1} label="LEVEL" />
          <Point amount={width} label="WIDTH" />
        </View>

        <View
          style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            {archievements.map(item => (
              <View style={{width: width, height: width}}>
                <Card transparent>
                  <CardItem cardBody style={{backgroundColor: '#FFffee'}}>
                    <Body style={{ padding: 12, backgroundColor: '#FFffee', justifyContent: 'center', alignItems: 'center' }}>
                      <Icon name="star" size={28} />
                      <Text style={{ fontWeight: '800', textAlign: 'center' }}>{item.name}</Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Body style={{justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{textAlign: 'center'}}>{moment(item.time).fromNow()}</Text>
                    </Body>
                  </CardItem>
                </Card>
              </View>
            ))}
          </View>
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
