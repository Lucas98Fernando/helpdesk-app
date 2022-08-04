import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecoverPassword, SignIn, SignUp } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="signIn">
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="recoverPassword" component={RecoverPassword} />
    </Navigator>
  );
}
