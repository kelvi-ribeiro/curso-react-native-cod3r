/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Feed from './src/screens/Feed';
import Navigator from './src/Navigator'
AppRegistry.registerComponent(appName, () => Navigator);
