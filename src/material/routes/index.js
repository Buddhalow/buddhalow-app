import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, Redirect } from 'react-router-dom';

// Templates
import TemplateSidebar from '../views/TemplateSidebar';

// Routes
import DashboardView from '../views/Dashboard';
import Dashboard from '../../containers/Dashboard';
import TemplateNothing from '../views/TemplateNothing';
import LoginContainer from '../../containers/Login';
import LoginComponent from '../views/Login';
import Logout from '../views/Logout';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/dashboard"
      render={props => (
        <TemplateSidebar>
          <Dashboard {...props} Layout={DashboardView} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/logout"
      render={props => (
        <Logout {...props} />
      )}
    />
    <Route
      path="/login"
      render={props => (
        <TemplateNothing>
          <LoginContainer {...props} Layout={LoginComponent} />
        </TemplateNothing>
      )}
    />
  </Switch>
);

export default Index;
