import React from 'react';
import PropTypes from 'prop-types';
import { Column as Col, Row } from 'react-native-flexbox-grid';

import { View, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Icon } from 'native-base';
import moment from 'moment'

import Loading from './Loading';
import Error from './Error';
import Point from './Point';


const AchievementsComponent = ({
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
        <Row size={12}>
          <Col xs={12} sm={12} md={12} lg={4}>
            <Point amount={100} label="KARMA" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <Point amount={1} label="LEVEL" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <Point amount={width} label="WIDTH" />
          </Col>
        </Row>

        <Row size={12}>
          {achievements.map(item => (
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card transparent>
                <CardItem cardBody style={{ backgroundColor: '#FFffee' }}>
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
            </Col>
          ))}
        </Row>
      </Content>
    </Container>
  );
};

AchievementsComponent.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    achievements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }),
  reFetch: PropTypes.func,
};

AchievementsComponent.defaultProps = {
  error: null,
  reFetch: null,
  data: null,
};

export default AchievementsComponent;
