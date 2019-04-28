import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Icon } from 'native-base';
import moment from 'moment'

import Loading from './Loading';
import Error from './Error';
import Point from './Point';


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

  let { achievements } = data

  console.log(achievements)

  const keyExtractor = item => item.id;
  var width = (Dimensions.get('window').width / 4);
  console.log("Width of window", width)

  const onPress = item => {};
  if (!achievements) return <Error content="Achievements cannot be NULL" />;
  achievements = achievements.map(o => ({
    id: o.id,
    time: o.time,
    name: o.achievementType.name,
  }));
  return (
    <Container>
      <Content padder>
        <View
          style={{
            flexDirection: 'row',
            padding: 56,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Point amount={100} label="KARMA" />
          <Point amount={1} label="LEVEL" />
          <Point amount={width} label="WIDTH" />
        </View>

        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {achievements.map(item => (
            <View>
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
  data: PropTypes.shape({
    achievements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }),
  reFetch: PropTypes.func,
};

ArchievementsComponent.defaultProps = {
  error: null,
  reFetch: null,
  data: null,
};

export default ArchievementsComponent;
