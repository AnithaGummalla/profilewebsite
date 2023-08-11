import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login';
import SignUp from '../SignUp';
import WelcomeScreen from '../WelcomeScreen';
import TabNaviga from '../../TabNavigation';
import WelcomeSignup from '../WelcomeSignup';
import Modalcomponent from '../ModalComponent';
import Home from '../../Home';
import HomeScreen from '../../HomeScreen';
import Settings from '../../Settings';
import {MyTabs} from '../../TOPBARNAVIGATION';
import ProfilePhoto from '../EditCard/ProfilePhoto';
import ContactsList from '../ContactsList';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name=" " component={MyTabs} /> */}
        <Stack.Screen name=" " component={TabNaviga} />
        <Stack.Screen name="modal" component={Modalcomponent} />
        <Stack.Screen name="welcome" component={WelcomeSignup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="homescreen" component={Home} />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="edit" component={ProfilePhoto} />
        <Stack.Screen name="scannedList" component={ContactsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
