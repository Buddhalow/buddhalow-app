import React from 'react';
import PropTypes from 'prop-types';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../config.js';


const DrawerHeader = ({ children }) => (
  <div style={{ width: '228pt', background: `linear-gradient(90deg, ${PRIMARY_COLOR}, ${SECONDARY_COLOR})`, flexDirection: 'column', justifyContent: 'flex-end' }}>
    {children}
  </div>
);

DrawerHeader.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default DrawerHeader;

