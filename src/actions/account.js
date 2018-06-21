import ErrorMessages from '../constants/errors';
import statusMessage from './status';
import { buddhalow } from '../lib/buddhalow';

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
    throw 'Sign up not enabled for this service'
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
}

/**
  * Get this User's Details
  */
function getUserData(dispatch) {

    return dispatch({
      type: 'USER_DETAILS_UPDATE',
      data: userData,
    });
}

export function getMemberData() {
  // Ensure token is up to date
  return dispatch => new Promise((resolve) => {
    throw "Not implemented";
  });
}

/**
  * Login to Firebase with Email/Password
  */
export function login(formData) {
  const {
    email,
    password,
  } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
    await statusMessage(dispatch, 'loading', true);

    // Validation checks
    if (!email) return reject({ message: ErrorMessages.missingEmail });
    if (!password) return reject({ message: ErrorMessages.missingPassword });

    // Go to Firebase
    return buddhalow.logIn(
        email,
        password
    ).then(async (res) => {
        // Send Login data to Redux
        return resolve(dispatch({
            type: 'USER_LOGIN',
            data: res,
        }));
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
    })
}

/**
  * Reset Password
  */
export function resetPassword(formData) {
  const { email } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
    throw "Not Implemented"    
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
    throw "Not Implemented"
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
}

/**
  * Logout
  */
export function logout() {
  return dispatch => new Promise((resolve, reject) => {
    AsyncStorage.removeItem('@Buddhalow:session').then(() => {
        dispatch({ type: 'USER_RESET' });
        setTimeout(resolve, 1000); // Resolve after 1s so that user sees a message
      }).catch(reject);
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
}