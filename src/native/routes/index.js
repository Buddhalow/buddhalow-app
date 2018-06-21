import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

let PRODUCT = 'aquafulness'

import NotificationsContainer from '../../containers/Notifications';
import NotificationsComponent from '../components/Notifications';
import NotificationContainer from '../../containers/Notification';
import NotificationComponent from '../components/Notification';

import ArchievementsContainer from '../../containers/Archievements';
import ArchievementsComponent from '../components/Archievements';


// Produt cravity
import HealsComponent from '../components/Heals'
import HealsContainer from '../../containers/Heals'
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
import ProfileComponent from '../components/Profile';

import AboutComponent from '../components/About';

const Index = (
  <Stack>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled 
        type="replace"
        showLabel={true}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="notifications"
          title="FEED"
          icon={() => <Icon name="star" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="notifications" component={NotificationsContainer} Layout={NotificationsComponent} />
        </Stack>
        <Stack
          key="archievements"
          title="ARCHIEVEMENTS"
          icon={() => <Icon name="star" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="archievements" component={ArchievementsContainer} Layout={ArchievementsComponent} />
        </Stack>
{(PRODUCT == 'cravity' &&
        <Stack
          key="heals"
          title="Heals"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="heals" component={HealsContainer} Layout={HealsComponent} />
        </Stack> &&
        <Stack
        key="heals"
        title="Heals"
        icon={() => <Icon name="contact" {...DefaultProps.icons} />}
        {...DefaultProps.navbarProps}
      >
        <Scene key="heals" component={HealsContainer} Layout={HealsComponent} />
      </Stack>
) || (PRODUCT == 'aquafulness' && [
        <Stack 
          key="intervene"
          title="INTERVENE"
          backgroundColor="#eee"
          tabStyle={{backgroundColor: '#ddd'}}
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}>
          <Scene key="heals" component={HealsContainer} Layout={HealsComponent} />
        </Stack>,
        <Stack
      key="seeds"
      title="SEEDS"
      icon={() => <Icon name="contact" {...DefaultProps.icons} />}
      {...DefaultProps.navbarProps}>
      <Scene key="seeds" component={HealsContainer} Layout={HealsComponent} />
      </Stack>
  
]
)}
        <Stack
          key="profile"
          title="ACCOUNT"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
          <Scene
            back
            key="signUp"
            title="SIGN UP"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="LOGIN"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="forgotPassword"
            title="FORGOT PASSWORD"
            {...DefaultProps.navbarProps}
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />
          <Scene
            back
            key="locale"
            title="CHANGE LANGUAGE"
            {...DefaultProps.navbarProps}
            component={LocaleContainer}
            Layout={LocaleComponent}
          />
          <Scene
            back
            key="updateProfile"
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
      clone
      key="notification"
      title="NOTIFICATION"
      {...DefaultProps.navbarProps}
      component={NotificationsContainer}
      Layout={NotificationsComponent}
    />
  </Stack>
);

export default Index;
