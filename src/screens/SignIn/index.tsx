import React from 'react';
import { Heading, Stack, Text } from 'native-base';
import { SignInForm } from '../../components/Forms/SignInForm';
import { AuthLayout } from '../../layouts/auth';
import images from '../../assets/images';

export function SignIn() {
  return (
    <AuthLayout
      imageURI={images.CallSupport}
      textFooter="Ainda não possui conta?"
      textFooterAction="Cadastre-se"
      routeToNavigate={'signUp'}>
      <Stack mb={6} space={4}>
        <Heading>Login</Heading>
        <Text color={'gray.700'}>Faça login na sua conta</Text>
      </Stack>
      <SignInForm />
    </AuthLayout>
  );
}
