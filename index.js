/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import EditCard from './components/PROFILE/EditCard';
import ProfilePhoto from './components/PROFILE/EditCard/ProfilePhoto';
import {MyTabs} from './components/TOPBARNAVIGATION';
import Sheet from './components/PROFILE/Sheet';
import Links from './components/PROFILE/LINKS/Links';
import EditLinks from './components/PROFILE/EditCard/Links';
import StackNavigation from './components/PROFILE/stackNavigator/StackNavigation';
import TabNaviga from './components/TabNavigation';

AppRegistry.registerComponent(appName, () => StackNavigation);
