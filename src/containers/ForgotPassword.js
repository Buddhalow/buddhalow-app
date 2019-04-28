import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetPassword } from '../actions/buddhalow';

const ForgotPasswordContainer = ({
  Layout,
  onFormSubmit,
  buddhalow,
  isLoading,
  errorMessage,
}) => (
  <Layout
    stacksai={stacksai}
    loading={isLoading}
    error={errorMessage}
    onFormSubmit={onFormSubmit}
  />
);

ForgotPasswordContainer.propTypes = {
  Layout: PropTypes.func.isRequired,
  buddhalow: PropTypes.shape({}).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

ForgotPasswordContainer.defaultProps = {
  errorMessage: null,
};

const mapStateToProps = state => ({
  buddhalow: state.stacksai || {},
  isLoading: state.status.loading || false,
  infoMessage: state.status.info || null,
  errorMessage: state.status.error || null,
  successMessage: state.status.success || null,
});

const mapDispatchToProps = {
  onFormSubmit: resetPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);
