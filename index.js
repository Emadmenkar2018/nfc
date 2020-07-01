/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LoginScreen from './src/screens/auth/loginScreen'
// import HomeScreen from './src/screens/HomeScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginScreen);
