import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl, } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base/index';
import moment from 'moment/moment';

import {translate} from '../../i18n';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Spacer from '../components/Spacer';

class ParticipationsScreen extends React.Component {
  render() {
    const {
      error,
      loading,
      data,
      reFetch,
    } = this.props;
    // Loading
    console.log(loading, data, error);
    if (loading || !data) return <Loading />;

    // Error
    if (error) return <Error content={error} />;

    const { participations } = data;

    console.log(participations);

    const keyExtractor = item => item.id;
    if (!participations) return <Error content={translate('tNotifications cannot be NULL')} />;
    return (
      <Container>
        <Content padder>
          <FlatList
            numColumns={1}
            data={participations}
            renderItem={({ item }) => (
              <Card transparent style={{ padding: 56 }}>
                <CardItem cardBody>
                  <Body style={{ padding: 28, backgroundColor: '#eee' }}>
                    <Text style={{ fontWeight: '800' }}>{item.segment.episode.season.show.name}</Text>
                    <Text style={{ fontWeight: '800' }}>{item.segment.episode.season.show.channel.name}</Text>
                  </Body>
                </CardItem>
                <CardItem cardBody style={{ padding: 28 }}>
                  <Body>
                    <Text>{moment(item.broadcasted).fromNow()}</Text>
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

ParticipationsScreen.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    participations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      broadcasted: PropTypes.instanceOf(Date),
      segment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        episode: PropTypes.shape({
          number: PropTypes.number.isRequired,
          season: PropTypes.shape({
            id: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
            show: PropTypes.shape({
              id: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              channel: PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
              }).isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    })).isRequired,
  }),
  reFetch: PropTypes.func,
};

ParticipationsScreen.defaultProps = {
  error: null,
  reFetch: null,
  data: null,
};

export default ParticipationsScreen;
