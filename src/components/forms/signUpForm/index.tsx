import React, { useState } from 'react';
import { Button, Icon, Input, Stack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSignUp } from '@hooks/auth';

export function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, showPassword, setShowPassword, handleSignUp } = useSignUp();

  return (
    <Stack space={5} w="100%" alignItems="center">
      <Input
        value={email}
        onChangeText={setEmail}
        rounded={10}
        isFullWidth
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="email" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="E-mail"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        rounded={10}
        isFullWidth
        type={showPassword ? 'text' : 'password'}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="lock" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        InputRightElement={
          <Icon
            as={
              <MaterialIcons
                name={showPassword ? 'visibility' : 'visibility-off'}
              />
            }
            size={5}
            mr="2"
            color="muted.400"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        placeholder="Senha"
      />
      <Button
        colorScheme={'primary'}
        rounded={10}
        isLoading={loading}
        isLoadingText="Entrando..."
        onPress={() => handleSignUp({ email, password })}>
        Cadastrar
      </Button>
    </Stack>
  );
}
