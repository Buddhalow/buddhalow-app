import {AsyncStorage} from 'react-native'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { onError } from "apollo-link-error"
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

import { CLIENT_ID, CLIENT_SECRET, GRAPH_API_URL, API_ENDPOINT } from 'react-native-dotenv'


export class Buddhalow {
  async getSession() {
      let strSession
      try {
          strSession = await AsyncStorage.getItem('@Buddhalow:session')
          console.log("SESSION", strSession)
      
      } catch (e) {
          throw e
      }
      try {
      if (!strSession) {
          return null
      }
      let session = JSON.parse(strSession)
      console.log("Session", session)
      if (session.issued && new Date().getTime() < session.issued + session.expires_in * 1000) {
          return session
      }
      } catch (e) {
          AsyncStorage.removeItem('@Buddhalow:session')
          console.log(e)
          return null
      }
      return null
  }
  async setSession(value) {
      await AsyncStorage.setItem('@Buddhalow:session', JSON.stringify(value))
  }
  async isLoggedIn() {
      let loggedIn = await this.getSession()
      console.log('is logged in', loggedIn)
      return loggedIn !== null
  }
  async logout() {
    await AsyncStorage.removeItem('@Buddhalow:session')
  }
  /**
   * Logs into Buddhalow's back-end
   **/
  async logIn(username, password) {
      let postData = 'grant_type=password&'
      + 'client_id=' + CLIENT_ID
      + '&client_secret=' + CLIENT_SECRET
      + '&scope=read+write'
      + '&username=' + username
      + '&password=' + password
      console.log(postData)
      let result = await fetch(
      API_ENDPOINT + '/oauth/token/',
      { 
          method: 'POST',
          mod: 'cors',
          body: postData,
          headers: {
          'Content-type': 'application/x-www-form-urlencoded'
          }  
      }
      ).then((response) => response.json())
      result.issued = new Date().getTime()
      console.log(result)
      await this.setSession(result)
      if (result && result.token_type == 'Bearer') {
        return result
      } else {
        return null
      } 
  }
}


const httpLink = new HttpLink({ uri: GRAPH_API_URL })
const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  let session = null
  try {
    session = await buddhalow.getSession()
  
   console.log(session)
  } catch (e) {
    throw e
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: session && session.access_token ? `Bearer ${session.access_token}` : "",
    }
  }
})

const link = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export let buddhalow = new Buddhalow()

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

console.log(client)

export default client;


