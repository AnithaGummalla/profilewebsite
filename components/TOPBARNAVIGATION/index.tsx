import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Display from '../PROFILE/EditCard/Display';
import EditCard from '../PROFILE/EditCard';
import {NavigationContainer} from '@react-navigation/native';
import Sheet from '../PROFILE/Sheet';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}>
        <Tab.Screen
          name="General"
          component={Display}
          options={{
            tabBarIconStyle: {},
          }}
        />
        <Tab.Screen name="settings" component={EditCard} />
        <Tab.Screen name="accounts" component={Sheet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
