import Colors from '../../../native-base-theme/variables/commonColor';

export default {
  navbarProps: {
    navigationBarStyle: { 
      backgroundColor: 'white',
      shadowRadius: 1,
      shadowOpacity: 1,
      shadowOffset: {
        height: 1,
        width: 0,
      },
      elevation: 1
    },
    titleStyle: {
      
      color: Colors.textColor,
      alignSelf: 'center',
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
    },
    backButtonTintColor: Colors.textColor,
  },
  tabProps: {
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    activeBackgroundColor: '#eee',
    inactiveBackgroundColor: Colors.backgroundColor,
    tabBarStyle: { backgroundColor: '#ffffff' },
  },
  icons: {
    style: { color: '#555', height: 30, width: 30 },
  },
};
