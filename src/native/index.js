import React from 'react';
import { StatusBar, Platform, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack, Actions } from 'react-native-router-flux';
import { ApolloProvider } from 'react-apollo';
import { Root, StyleProvider } from 'native-base';
import { PersistGate } from 'redux-persist/es/integration/react';

import Routes from './routes/index';
import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/commonColor';

import Loading from './components/Loading';

import client from '../lib/buddhalow';

console.log('CLIENT', client)


// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);

class App extends React.Component {
  async componentDidMount() {
    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    const session = await AsyncStorage.getItem('@Buddhalow:session')
    if (!session) {
      Actions.logIn();
    } else {
      try {

      } catch (e) {
        console.log(e.stack);
      }
    }
  }

  render() {
    return (
      <Root>
        <ApolloProvider client={client}>
          <Provider store={this.props.store}>
            <PersistGate
              loading={<Loading />}
              persistor={this.props.persistor}
            >
              <StyleProvider style={getTheme(theme)}>
                <Router uriPrefix={`${this.props.product}.app`}>
                  <Stack key="root">
                    {Routes(this.props.product)}
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
  product: PropTypes.shape().isRequired,
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default App;
