import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/home';

const { Navigator, Screen } = createNativeStackNavigator();

export function HomeRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
