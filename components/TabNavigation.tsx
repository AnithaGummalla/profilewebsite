import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import Profile from './PROFILE';
import PersonalDetails from './PROFILE/PersonalDetails';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Contacts from './PROFILE/Contacts/Contacts';
import ContactsList from './PROFILE/ContactsList';
import {NavigationContainer} from '@react-navigation/native';
import CameraInstall from './CAMERA';

const Tab = createBottomTabNavigator();

export default function TabNaviga() {
  return (
    <Tab.Navigator
      initialRouteName="profile"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === 'profile') {
            iconName = focused ? 'home' : 'home';
          } else if (rn === 'contact') {
            iconName = focused ? 'barcode' : 'barcode';
          } else if (rn === 'contacts') {
            iconName = focused ? 'user' : 'user';
          } else if (rn === 'settings') {
            iconName = focused ? 'gear' : 'gear';
          } else if (rn === 'scanCard') {
            iconName = focused ? 'plus' : 'plus';
          }
          return <FontAwesomeIcon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="contact" component={PersonalDetails} />
      <Tab.Screen name="scanCard" component={CameraInstall} />
      <Tab.Screen name="contacts" component={Contacts} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
}
