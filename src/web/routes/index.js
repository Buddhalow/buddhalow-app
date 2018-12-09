import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateNothing from '../components/TemplateNothing';
import TemplateSidebar from '../components/TemplateSidebar';

// Routes
import Home from '../components/Home';

import DashboardComponent from '../components/Dashboard'
import Dashboard from '../../containers/Dashboard'
import HousingComponent from '../components/Housing'
import HousingContainer from '../../containers/Housing'
import BungalowComponent from '../components/Bungalow'
import BungalowContainer from '../../containers/Bungalow'
import BungalowAccountComponent from '../components/BungalowAccount'
import BungalowAccountContainer from '../../containers/BungalowAccount'

import FungalifyComponent from '../components/Fungalify'
import FungalifyContainer from '../../containers/Fungalify'
import FungalInfectionComponent from '../components/FungalInfection'
import FungalInfectionContainer from '../../containers/FungalInfection'

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import Error from '../components/Error';

import * as dom from '../dom/elements';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateSidebar>
          <Dashboard {...props} Layout={DashboardComponent} />
        </TemplateSidebar>
      )}
    />
     <Route
      path="/fungalify/infection/:id"
      render={props => (
        <TemplateSidebar>
          <FungalInfectionContainer {...props} Layout={FungalInfectionComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/fungalify"
      render={props => (
        <TemplateSidebar>
          <FungalifyContainer {...props} Layout={FungalifyComponent} />
        </TemplateSidebar>
      )}
    />

    <Route
      path="/buddhaloan/account/:id"
      render={props => (
        <TemplateSidebar>
          <BungalowAccountContainer {...props} Layout={BungalowAccountComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/bungalow/:id"
      render={props => (
        <TemplateSidebar>
          <BungalowContainer {...props} Layout={BungalowComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/bungalow"
      render={props => (
        <TemplateSidebar>
          <HousingContainer {...props} Layout={HousingComponent} />
        </TemplateSidebar>
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
    <Route
      path="/forgot-password"
      render={props => (
        <TemplateNothing>
          <ForgotPasswordContainer {...props} Layout={ForgotPasswordComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/update-profile"
      render={props => (
        <TemplateSidebar>
          <UpdateProfileContainer {...props} Layout={UpdateProfileComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/recipes"
      render={props => (
        <TemplateSidebar>
          <RecipesContainer {...props} Layout={RecipesComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      render={props => (
        <TemplateSidebar>
          <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
        </TemplateSidebar>
      )}
    />
  </Switch>
);

export default Index;
