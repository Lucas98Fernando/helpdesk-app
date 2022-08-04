import 'react-native-gesture-handler';
import React from 'react';
import { Routes } from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
