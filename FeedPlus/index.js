/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from './Src/Service/Service';
import { onAuthStateChanged } from 'firebase/auth';
AppRegistry.registerComponent(appName, () => App);
// index.js or App.js
// Import the functions you need from the SDKs you need
