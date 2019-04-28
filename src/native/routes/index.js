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

import LoginContainer from '../../containers/LoginContainer';
import LoginScreen from '../screens/LoginScreen';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

import LocaleContainer from '../../containers/Locale';
import LocaleComponent from '../components/Locale';

import MemberContainer from '../../containers/Member';
import ProfileScreen from '../screens/ProfileScreen';
import ParticipationsScreen from '../screens/ParticipationsScreen';
import ParticipationsContainer from '../../containers/ParticipationsContainer';
import UserAccountScreen from '../screens/UserAccountScreen';
import UserAccountContainer from '../../containers/UserAccountContainer';
import { PRODUCT } from '../../env';

const Index = (
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
        {(PRODUCT === 'cravity' ? [
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
        ] : []) || (PRODUCT === 'aquafulness' ? [
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
        ] : []) || (PRODUCT === 'celebrify' ? [
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
        ] : []) || (PRODUCT === 'bathing' ? [
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
        ] : [])}
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
          <Stack
            key="account"
            title="ACCOUNT"
            icon={focused => <Icon name="ios-person" {...DefaultProps.icons} style={{ ...DefaultProps.icons.style, color: focused ? DefaultProps.tabProps.activeTintColor : 'black' }} />}
            {...DefaultProps.navbarProps}

          >
            <Scene key="account" Layout={UserAccountScreen} component={UserAccountContainer} />
          </Stack>
        </Stack>
      </Tabs>
    </Scene>
    <Scene hideNavBar key="splash">
      <Scene
        hideNavBar
        {...DefaultProps.navbarProps}
        key="login"
        type="replace"
        Layout={LoginScreen}
        component={LoginContainer}
      />
      <Scene
        hideNavBar
        {...DefaultProps.navbarProps}
        key="forgotpassword"
        type="replace"
        Layout={ForgotPasswordScreen}
        component={ForgotPasswordContainer}
      />
    </Scene>
  </Modal>
);

export default Index;
