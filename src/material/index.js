/* global document */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ApolloProvider } from 'react-apollo';

import configureStore from '../store/index';
import Routes from './routes/index';

import client from '../lib/buddhalow';


console.log('CLIENT', client);


const { persistor, store } = configureStore();
// persistor.purge(); // Debug to clear persist

const rootElement = document.getElementById('root');

const Root = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <Router>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  </ApolloProvider>
);

render(<Root />, rootElement);
// Check for browser support of service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then((registration) => {
      // Successful registration
      console.log('Hooray. Registration successful, scope is:', registration.scope);
    }).catch((err) => {
    // Failed registration, service worker won’t be installed
      console.log('Whoops. Service worker registration failed, error:', error);
    });
}
