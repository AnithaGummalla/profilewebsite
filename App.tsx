import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './components/Home';
import Settings from './components/Settings';
import {NavigationContainer} from '@react-navigation/native';
import Contacts from './components/CONTACTS';
import Data from './components/CONTACTS/Data';
import {Text} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Text>App</Text>
    // <NavigationContainer>
    //    <Stack.Navigator>
    //   <Stack.Screen name="Home" component={Home} />
    //   <Stack.Screen name="Settings" component={Settings} />
    // </Stack.Navigator>
    // <Contacts />
    //   <Data />
    // </NavigationContainer>
  );
}
