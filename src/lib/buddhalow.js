import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from '../storage';

import { CLIENT_ID, CLIENT_SECRET, GRAPH_API_URL, API_ENDPOINT } from '../env';


export class Buddhalow {
  async getSession() {
    let strSession;
    try {
      strSession = await AsyncStorage.getItem('@Buddhalow:session');
    } catch (e) {
      throw e;
    }
    try {
      if (!strSession) {
        return null;
      }
      const session = JSON.parse(strSession);
      if (session.issued && new Date().getTime() < session.issued + session.expires_in * 1000) {
        return session;
      }
    } catch (e) {
      AsyncStorage.removeItem('@Buddhalow:session');
      return null;
    }
    return null;
  }
  async setSession(value) {
    await AsyncStorage.setItem('@Buddhalow:session', JSON.stringify(value));
  }
  async isLoggedIn() {
    const loggedIn = await this.getSession();
    return loggedIn !== null;
  }
  async logout() {
    await AsyncStorage.removeItem('@Buddhalow:session');
  }
  /**
   * Logs into Buddhalow's back-end
   * */
  async logIn(username, password) {
    const postData = `${'grant_type=password&client_id='}${CLIENT_ID}&client_secret=${CLIENT_SECRET}&scope=read+write&username=${username}&password=${password}`;
    const result = await fetch(
      `${API_ENDPOINT}/oauth/token/`,
      {
        method: 'POST',
        mod: 'cors',
        body: postData,
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      },
    ).then(response => response.json());
    result.issued = new Date().getTime();
    await this.setSession(result);
    if (result && result.token_type === 'Bearer') {
      console.log('#RESULT', result);
      return result;
    }
    return null;
  }
}


const httpLink = new HttpLink({ uri: GRAPH_API_URL });
const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  console.log('Loading...');
  try {
    const strSession = await AsyncStorage.getItem('@Buddhalow:session');
    if (!strSession) {
      //   Actions.login({type: 'replace'})
    }

    const session = JSON.parse(strSession);
    console.log(session);
    if (!session || ((session.issued + session.expires_in) * (new Date().getTime() >= 100))) {
      Actions.login();
    }
    // return the headers to the context so httpLink can read them
    const authorization = session && session.access_token ? `Bearer ${session.access_token}` : '';
    console.log('Authorization', authorization);
    return {
      headers: {
        ...headers,
        Authorization: authorization,
      },
    };
  } catch (err) {
    console.log(err);
  }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log(graphQLErrors, networkError)
  if (graphQLErrors) {
    console.log('#ERROR');

    graphQLErrors.map(({ message, locations, path }) => {
      if (message.indexOf('AnonymousUser') !== -1) {
        Actions.splash({ type: 'replace' });
      }
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const buddhalow = new Buddhalow();


const client = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
