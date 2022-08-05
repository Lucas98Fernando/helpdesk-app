import React from 'react';
import { Heading, Stack, Text } from 'native-base';
import { SignUpForm } from '../../components/Forms/SignUpForm';
import { AuthLayout } from '../../layouts/auth';
import images from '../../assets/images';

export function SignUp() {
  return (
    <AuthLayout
      imageURI={images.SupportOperator}
      textFooter="Já possui conta?"
      textFooterAction="Entrar"
      routeToNavigate={'signIn'}>
      <Stack mb={6} space={4}>
        <Heading>Cadastre-se</Heading>
        <Text color={'gray.700'}>Crie sua conta gratuitamente</Text>
      </Stack>
      <SignUpForm />
    </AuthLayout>
  );
}
