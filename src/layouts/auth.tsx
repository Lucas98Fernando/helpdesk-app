import React, { PropsWithChildren } from 'react';
import { Center, Container, Image, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AuthLayoutProps } from '../types';

export function AuthLayout({
  children,
  imageURI,
  textFooter,
  textFooterAction,
  routeToNavigate,
  routeParams,
}: PropsWithChildren<AuthLayoutProps>) {
  const navigation: Record<any, any> = useNavigation();

  return (
    <Center flex={1} flexDirection={'column'} justifyContent="space-between">
      <Container top={5}>
        <Image
          source={{
            uri: imageURI,
          }}
          alt="Auth Image"
          size={150}
        />
      </Container>
      <Container>{children}</Container>
      <Center flexDirection={'row'} bottom={5}>
        <Text mr={2}>{textFooter}</Text>
        <Text
          color={'primary.500'}
          onPress={() => navigation.navigate(routeToNavigate, routeParams)}>
          {textFooterAction}
        </Text>
      </Center>
    </Center>
  );
}
