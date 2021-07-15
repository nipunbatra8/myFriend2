import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApiKeys from './constants/ApiKeys';
import firebase from 'firebase';

import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import Profile from './screens/Profile';
import Connect from './screens/Connect';
import Experience from './screens/Experience';
import Interests from './screens/Interests';
import Groups from './screens/Groups';
import GroupChats from './screens/GroupChats';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Connect" component={Connect} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="Experience" component={Experience} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="Interests" component={Interests} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="Groups" component={Groups} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="GroupChats" component={GroupChats} options={{ headerShown: true, headerTransparent: true, title: '' }} />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    // Initialize firebase...
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }

  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}