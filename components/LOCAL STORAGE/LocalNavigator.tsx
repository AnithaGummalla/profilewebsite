import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../PROFILE/HomeScreen';
import LocalStorage from './LocalStorage';

const Stack = createNativeStackNavigator()

const LocalNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="localStorage" component={LocalStorage} />
      <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LocalNavigator