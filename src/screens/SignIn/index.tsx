import React from 'react';
import { Text } from 'react-native';
import { SignInForm } from '../../components/Forms/SignInForm';
import { AuthLayout } from '../../layouts/auth';

export function SignIn() {
  return (
    <AuthLayout>
      <Text>Login</Text>
      <SignInForm />
    </AuthLayout>
  );
}
