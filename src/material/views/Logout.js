/* eslint-disable no-undef */
import React from 'react';
import { Redirect } from 'react-router-dom';


const Logout = () => {
  localStorage.removeItem('@Buddhalow:session');
  return <Redirect to="/login" />;
};

export default Logout;
