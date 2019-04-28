import ErrorMessages from '../constants/errors';
import statusMessage from './status';
import { buddhalow } from '../lib/buddhalow';
import { AsyncStorage } from '../storage';

/**
 * Sign Up to Firebase
 */
export function signUp(formData) {
  const {
    email,
    password,
    password2,
    firstName,
    lastName,
  } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
    reject();
  })
}

/**
 * Get this User's Details
 */
function getUserData(dispatch) {
  return dispatch({
    type: 'USER_DETAILS_UPDATE',
    data: {},
  });
}

export function getMemberData() {
  // Ensure token is up to date
  return dispatch => new Promise((resolve, reject) => {
    buddhalow.getSession().then(async (session) => {
      if (!session) {
        await statusMessage(dispatch, 'error', 'No session');
        reject('no session');
        return;
      }
      resolve(dispatch({
        type: 'USER_DATA',
        data: session.user,
      }));
    });
  });
}

/**
 * LoginScreen to Buddhalow with Email/Password
 */
export function login(formData) {
  const {
    email,
    password,
  } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
    statusMessage(dispatch, 'loading', true)
      .then(() => {
        // Validation checks
        if (!email) return reject({ message: ErrorMessages.missingEmail });
        if (!password) return reject({ message: ErrorMessages.missingPassword });
        return buddhalow.logIn(email, password)
          .then(async (res) => {
            console.log(res);
            await statusMessage(dispatch, 'loading', true);
            return resolve(dispatch({
              type: 'USER_LOGIN',
              data: res,
            }));
          })
          .catch(async (err) => {
            await statusMessage(dispatch, 'error', err.message);
            reject(err);
          });
      });
  });
}

/**
 * Reset Password
 */
export function resetPassword(formData) {
  const { email } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
    // Validation checks
    if (!email) return reject({ message: ErrorMessages.missingEmail });

    await statusMessage(dispatch, 'loading', true);

    // Go to Firebase
    return buddhalow
      .sendPasswordResetEmail(email)
      .then(() => statusMessage(dispatch, 'loading', false).then(resolve(dispatch({ type: 'USER_RESET' }))))
      .catch(reject);
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
}

/**
 * Update Profile
 */
export function updateProfile(formData) {
  const {
    email,
    password,
    password2,
    firstName,
    lastName,
    changeEmail,
    changePassword,
  } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
    // Are they a user?
    const UID = Firebase.auth().currentUser.uid;
    if (!UID) return reject({ message: ErrorMessages.missingFirstName });

    // Validation checks
    if (!firstName) return reject({ message: ErrorMessages.missingFirstName });
    if (!lastName) return reject({ message: ErrorMessages.missingLastName });
    if (changeEmail) {
      if (!email) return reject({ message: ErrorMessages.missingEmail });
    }
    if (changePassword) {
      if (!password) return reject({ message: ErrorMessages.missingPassword });
      if (!password2) return reject({ message: ErrorMessages.missingPassword });
      if (password !== password2) return reject({ message: ErrorMessages.passwordsDontMatch });
    }

    await statusMessage(dispatch, 'loading', true);

    // Go to Firebase
    return FirebaseRef.child(`users/${UID}`).update({ firstName, lastName })
      .then(async () => {
        // Update Email address
        if (changeEmail) {
          await Firebase.auth().currentUser.updateEmail(email).catch(reject);
        }

        // Change the password
        if (changePassword) {
          await Firebase.auth().currentUser.updatePassword(password).catch(reject);
        }

        // Update Redux
        await getUserData(dispatch);
        await statusMessage(dispatch, 'success', 'Profile Updated');
        resolve();
      }).catch(reject);
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
}

/**
 * Logout
 */
export function logout() {
  return dispatch => new Promise(async (resolve, reject) => {
    console.log('Logout');
    await statusMessage(
      dispatch,
      'loading',
      true,
    );
    return AsyncStorage.removeItem('@Buddhalow:session').then(async (result) => {
      statusMessage(dispatch, 'loading', true);
      console.log('Logged out');
      resolve(dispatch({
        type: 'LOGOUT',
      }));
    });
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
}
