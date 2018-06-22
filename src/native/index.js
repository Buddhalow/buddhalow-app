import React from 'react';
import { StatusBar, Platform, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack, Actions } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';
import {
  Notifications,
} from 'expo';

import { Root, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/commonColor';

import Routes from './routes/index';
import Loading from './components/Loading';

import client from '../lib/buddhalow'

console.log("CLIENT", client)

import { ApolloProvider } from "react-apollo";

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);
import registerForPushNotificationsAsync from './registerForPushNotificationsAsync';

class App extends React.Component {
  state = {
    notification: {},
  }
  async componentDidMount() {
    
    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
    let session = await AsyncStorage.getItem('@Buddhalow:session')
    if (!session) {
      Actions.logIn()
    } else {
      try {
        registerForPushNotificationsAsync();
      } catch (e) {
  
      }
    }
  }
  _handleNotification = (notification) => {
    this.setState({notification: notification});
  };

  render() {
    return (
      <Root>
        <ApolloProvider client={client}>
          <Provider store={this.props.store}>
            <PersistGate
              loading={<Loading />}
              persistor={this.props.persistor}
            >
              <StyleProvider style={getTheme(this.props.theme)}>
                <Router>
                  <Stack key="root">
                    {Routes}
                  </Stack>
                </Router>
              </StyleProvider>
            </PersistGate>
          </Provider>
        </ApolloProvider>
      </Root>
    )
  }
}

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default App;
