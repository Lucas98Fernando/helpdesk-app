import React, { PropsWithChildren } from 'react';
import { Center, Container, ScrollView, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AuthLayoutProps } from '@/types';
import { Image } from 'react-native';
import styles from './styles';

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
    <ScrollView _contentContainerStyle={styles.scrollView}>
      <Center>
        <Container>
          <Image source={imageURI} style={styles.logo} />
        </Container>
        <Container mb={10}>{children}</Container>
        <Center flexDirection={'row'}>
          <Text mr={2}>{textFooter}</Text>
          <Text
            color={'primary.500'}
            onPress={() => navigation.navigate(routeToNavigate, routeParams)}>
            {textFooterAction}
          </Text>
        </Center>
      </Center>
    </ScrollView>
  );
}
