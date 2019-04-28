import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import { Image, View, Dimensions, Text, TouchableOpacity } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import { translate } from '../../i18n';
import DefaultProps from '../constants/navigation';

class UserAccountScreen extends Component {

  render() {
    let { user, logout } = this.props;
    return (
      user ? <View style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }}>

        {user.imageUrl ?
          <Image source={{ uri: user.imageUrl }} style={{
            width: Dimensions.get('window').width * 0.8,
            height: Dimensions.get('height').width * 0.8
          }}/>
          :
          <Icon name="contact" {...DefaultProps.icons} style={{
            fontSize: Dimensions.get('window').width * 0.8,
          }}/>
        }
        <Text style={{ textAlign: 'center', }}>{`${user.firstName} ${user.lastName}`}</Text>

        <PrimaryButton
          onPress={() => {
            logout()
              .then(() => {
                Actions.login({ type: 'replace' });
              });
          }}
          text={translate('Logout')}
        />
      </View> : <View><Text>{translate('ErrorDisplayingUser')}</Text></View>
    );
  }
}

UserAccountScreen.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default UserAccountScreen;
