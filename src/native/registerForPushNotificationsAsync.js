import { AsyncStorage } from 'react-native'

import { Permissions, Notifications } from 'expo';

import { PUSH_ENDPOINT } from 'react-native-dotenv'

export default async function registerForPushNotificationsAsync() {
    let token = await getPushToken()
    let strSession = await AsyncStorage.getItem('@Buddhalow:session')
    let session = null
    if (strSession) {
      session = JSON.parse(strSession)
    } else {
      throw "No session"
    }
    let payload = {
      token: {
        value: token,
      },
      access_token: session.access_token,
      session: session
    }
    let body = JSON.stringify(payload)
    console.log(payload)
    console.log("#PUSH_ENDPOINT", PUSH_ENDPOINT)
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    return await fetch(PUSH_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    });
}


async function getPushToken() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  return token
}