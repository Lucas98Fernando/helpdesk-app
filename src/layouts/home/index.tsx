import React, { PropsWithChildren } from 'react';
import { Container, View } from 'native-base';
import { Header } from '@components/header';

export function HomeLayout({ children }: PropsWithChildren) {
  return (
    <View pt={4} px={4}>
      <Header />
      <Container>{children}</Container>
    </View>
  );
}
