import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, Redirect } from 'react-router-dom';

// Templates
import TemplateSidebar from '../views/TemplateSidebar';

// Routes
import DashboardView from '../views/Dashboard';
import Dashboard from '../../containers/Dashboard';
import SeminationsView from '../views/Seminations';
import Seminations from '../../containers/Seminations';
import NotificationsView from '../views/Notifications';
import Notifications from '../../containers/Notifications'
import CravingsView from '../views/Cravings';
import Cravings from '../../containers/Cravings';
import HealsView from '../views/Heals';
import Heals from '../../containers/Heals';
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
      exact
      path="/dashboard/seminations"
      render={props => (
        <TemplateSidebar>
          <Seminations {...props} Layout={SeminationsView} />
        </TemplateSidebar>
      )}
    />
    <Route
      exact
      path="/dashboard/cravings"
      render={props => (
        <TemplateSidebar>
          <Cravings {...props} Layout={CravingsView} />
        </TemplateSidebar>
      )}
    />

    <Route
      exact
      path="/dashboard/healings"
      render={props => (
        <TemplateSidebar>
          <Heals {...props} Layout={HealsView} />
        </TemplateSidebar>
      )}
    />

    <Route
      exact
      path="/dashboard/notifications"
      render={props => (
        <TemplateSidebar>
          <Notifications {...props} Layout={NotificationsView} />
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
