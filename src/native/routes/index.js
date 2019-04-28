import React from 'react';
import { Scene, Tabs, Stack, Modal } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';


import NotificationsContainer from '../../containers/Notifications';
import NotificationsComponent from '../components/Notifications';

import AchievementsContainer from '../../containers/Achievements';
import AchievementsComponent from '../components/Achievements';

// Produt cravity
import AddHealComponent from '../components/AddHeal';
import HealsComponent from '../components/Heals';
import HealsContainer from '../../containers/Heals';
// End Product cravity
import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import LocaleContainer from '../../containers/Locale';
import LocaleComponent from '../components/Locale';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileScreen from '../screens/ProfileScreen';
import ParticipationsScreen from '../screens/ParticipationsScreen';
import ParticipationsContainer from '../../containers/ParticipationsContainer';

const Index = product => (
  <Modal>
    <Scene hideNavBar key="root">
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel
        {...DefaultProps.tabProps}
      >
        <Stack
          key="notifications"
          title="FEED"
          icon={() => <Icon name="star" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}

        >
          <Scene key="notifications" path="/feed" component={NotificationsContainer} Layout={NotificationsComponent} />
        </Stack>
        <Stack
          key="achievements"
          title="ACHIEVEMENTS"
          icon={() => <Icon name="star" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="achievements" path="'/achievement/:id" component={AchievementsContainer} Layout={AchievementsComponent} />
        </Stack>
        {(product === 'cravity' && [
          <Stack
            key="addHeal"
            title="ADD HEAL"
            icon={() => <Icon name="star" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="addHeal" path="/heal" component={AddHealComponent} />
          </Stack>,
          <Stack
            key="heals"
            title="HEALS"
            icon={() => <Icon name="contact" path="/heals" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="heals" component={HealsContainer} Layout={HealsComponent} />
          </Stack>,
        ]) || (product === 'aquafulness' && [
          <Stack
            key="intervene"
            title="INTERVENE"
            backgroundColor="#eee"
            tabStyle={{ backgroundColor: '#ddd' }}
            icon={() => <Icon name="contact" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="heals" path="/intervene" component={HealsContainer} Layout={HealsComponent} />
          </Stack>,
          <Stack
            key="seeds"
            title="SEEDS"
            icon={() => <Icon name="contact" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="seeds" component={HealsContainer} Layout={HealsComponent} />
          </Stack>,
        ]) || (product === 'celebrify' && [
          <Stack
            key="participations"
            title="TV"
            tabStyle={{ backgroundColor: '#ddd' }}
            icon={() => <Icon name="contact" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="heals" path="/participations" component={ParticipationsContainer} Layout={ParticipationsScreen} />
          </Stack>,
          <Stack
            key="seeds"
            title="SEEDS"
            icon={() => <Icon name="contact" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="seeds" component={HealsContainer} Layout={HealsComponent} />
          </Stack>,
        ]) || (product === 'bathing' && [
          <Stack
            key="intervene"
            title="INTERVENE"
            backgroundColor="#eee"
            tabStyle={{ backgroundColor: '#ddd' }}
            icon={() => <Icon name="contact" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene key="heals" path="/intervene" component={HealsContainer} Layout={HealsComponent} />
          </Stack>,
        ])}
        <Stack
          key="profile"
          title="ACCOUNT"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={MemberContainer} Layout={ProfileScreen} />

          <Scene
            back
            key="locale"
            title="CHANGE LANGUAGE"
            {...DefaultProps.navbarProps}
            component={LocaleContainer}
            Layout={LocaleComponent}
            path="/config/language"
          />
          <Scene
            back
            key="updateProfile"
            path="/profile"
            title="UPDATE PROFILE"
            {...DefaultProps.navbarProps}
            component={UpdateProfileContainer}
            Layout={UpdateProfileComponent}
          />
        </Stack>
      </Tabs>
    </Scene>
    <Scene
      back
      key="signUp"
      title="SIGN UP"
      path="/register"
      {...DefaultProps.navbarProps}
      component={SignUpContainer}
      Layout={SignUpComponent}
      hideTabBar
      hideNavBar
    />
    <Scene
      back
      key="login"
      title="LOGIN"
      path="/login"
      {...DefaultProps.navbarProps}
      component={LoginContainer}
      Layout={LoginComponent}
      hideTabBar
      hideNavBar
    />
    <Scene
      back
      key="forgotPassword"
      title="FORGOT PASSWORD"
      path="/forgot"
      {...DefaultProps.navbarProps}
      component={ForgotPasswordContainer}
      Layout={ForgotPasswordComponent}
      hideTabBar
      hideNavBar
    />
    <Scene
      back
      clone
      key="notification"
      title="NOTIFICATION"
      {...DefaultProps.navbarProps}
      component={NotificationsContainer}
      Layout={NotificationsComponent}
      hideTabBar
      hideNavBar
    />
  </Modal>
);

export default Index;
