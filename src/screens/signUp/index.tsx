import React from 'react';
import { Heading, Stack, Text } from 'native-base';
import { SignUpForm } from '@components/forms/signUpForm';
import { AuthLayout } from '@layouts/auth';
import { images } from '@config/images';

export function SignUp() {
  return (
    <AuthLayout
      imageURI={images.support_operator}
      textFooter="Já possui conta?"
      textFooterAction="Entrar"
      routeToNavigate={'signIn'}>
      <Stack mb={6} space={2}>
        <Heading>Cadastre-se</Heading>
        <Text color={'gray.700'}>Crie sua conta gratuitamente</Text>
      </Stack>
      <SignUpForm />
    </AuthLayout>
  );
}
