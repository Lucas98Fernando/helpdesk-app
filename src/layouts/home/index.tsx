import React, { PropsWithChildren } from 'react';
import { View } from 'native-base';
import { Header } from '@components/header';

interface FooterProps {
  footerContent?: JSX.Element;
}

export function HomeLayout({
  children,
  footerContent,
}: PropsWithChildren<FooterProps>) {
  return (
    <View flex={1} justifyContent={'space-between'} pt={4} px={4}>
      <View>
        <Header />
        <View>{children}</View>
      </View>
      {footerContent}
    </View>
  );
}
