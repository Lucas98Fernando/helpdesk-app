import React from 'react';
import { Heading, Stack, Text } from 'native-base';
import { RecoverPasswordForm } from '@components/forms/recoverPasswordForm';
import { AuthLayout } from '@layouts/auth';
import { images } from '@config/images';

export function RecoverPassword() {
  return (
    <AuthLayout
      imageURI={images.sad_girl}
      textFooter="Já recuperou a conta?"
      textFooterAction="Entrar"
      routeToNavigate={'signIn'}>
      <Stack mb={6} space={2}>
        <Heading>Recuperação de conta</Heading>
        <Text color={'gray.700'}>
          Informe o seu e-mail e deixe o resto conosco
        </Text>
      </Stack>
      <RecoverPasswordForm />
    </AuthLayout>
  );
}
