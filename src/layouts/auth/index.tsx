import React, { PropsWithChildren } from 'react';
import { Center, ScrollView, Text, View } from 'native-base';
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
      <View>
        <Center>
          <Image source={imageURI} style={styles.logo} />
        </Center>
        <View mb={10}>{children}</View>
        <Center flexDirection={'row'}>
          <Text mr={2}>{textFooter}</Text>
          <Text
            color={'primary.500'}
            onPress={() => navigation.navigate(routeToNavigate, routeParams)}>
            {textFooterAction}
          </Text>
        </Center>
      </View>
    </ScrollView>
  );
}
