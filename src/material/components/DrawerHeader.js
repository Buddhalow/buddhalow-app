import React from 'react';
import PropTypes from 'prop-types';
import { skeuomorphicPrimary } from '../theme';


const DrawerHeader = ({ children }) => (
  <div style={{ width: '228pt', ...skeuomorphicPrimary, flexDirection: 'column', justifyContent: 'flex-end' }}>
    {children}
  </div>
);

DrawerHeader.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default DrawerHeader;

