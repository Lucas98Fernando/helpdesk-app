import React, { useState } from 'react';
import { Button, Icon, Input, Stack, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSignIn } from '@hooks/auth';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, showPassword, setShowPassword, handleSignIn } = useSignIn();

  const navigation: Record<any, any> = useNavigation();

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
      <Text
        color={'primary.500'}
        fontSize={'xs'}
        alignSelf={'flex-start'}
        onPress={() => navigation.navigate('recoverPassword')}>
        Esqueceu sua senha?
      </Text>
      <Button
        colorScheme={'primary'}
        rounded={10}
        leftIcon={
          <Icon
            as={<MaterialIcons name="login" />}
            size={5}
            ml="2"
            color="white"
          />
        }
        isLoading={loading}
        isLoadingText="Entrando..."
        onPress={() => handleSignIn({ email, password })}>
        Entrar
      </Button>
    </Stack>
  );
}
