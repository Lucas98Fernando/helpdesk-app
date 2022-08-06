import React, { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { HomeRoutes } from './home.routes';

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const authenticated = auth().onAuthStateChanged(setUser);
    return authenticated;
  }, []);

  return (
    <NavigationContainer>
      {user ? <HomeRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
