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
        <Header
          title="Heals"
          content="Your latest heals"
        />

        <FlatList
          numColumns={1}
          data={heals}
          renderItem={({ item }) => (
            <Card transparent style={{ paddingHorizontal: 6 }}>
              <CardItem cardBody>
                <TouchableOpacity onPress={() => onPress(item)} style={{ flex: 1 }}>
                  <Image
                    source={{ uri: item.image_url }}
                    style={{
                      height: 100,
                      width: null,
                      flex: 1,
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </CardItem>
              <CardItem cardBody>
                <Body>
                  <Spacer size={10} />
                  <Text style={{ fontWeight: '800' }}>{item.name}</Text>
                  <Spacer size={15} />
                  <Button
                    block
                    bordered
                    small
                    onPress={() => onPress(item)}
                  >
                    <Text>View</Text>
                  </Button>
                  <Spacer size={5} />
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