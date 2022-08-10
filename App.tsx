import 'react-native-gesture-handler';
import React from 'react';
import { Routes } from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { NativeBaseProvider } from 'native-base';
import { ListOrdersProvider } from '@context/listOrdersContext';
import { UpdateOrderStatusModalProvider } from '@context/updateOrderStatusModalContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <ListOrdersProvider>
          <UpdateOrderStatusModalProvider>
            <Routes />
          </UpdateOrderStatusModalProvider>
        </ListOrdersProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
