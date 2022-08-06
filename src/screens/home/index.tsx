import React from 'react';
import { Text, View } from 'native-base';
import { HomeLayout } from '@layouts/home';

export function Home() {
  return (
    <HomeLayout>
      <View>
        <Text>Home</Text>
      </View>
    </HomeLayout>
  );
}
