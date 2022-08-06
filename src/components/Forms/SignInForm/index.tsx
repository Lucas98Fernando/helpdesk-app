import React, { useState } from 'react';
import { Button, Icon, Input, Stack, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading] = useState(false);

  const navigation: Record<any, any> = useNavigation();

  return (
    <Stack space={5} w="100%" alignItems="center">
      <Input
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
        color={'primary.500'}
        rounded={10}
        leftIcon={
          <Icon
            as={<MaterialIcons name="login" />}
            size={5}
            ml="2"
            color="white"
          />
        }
        isLoading={isLoading}
        isLoadingText="Entrando...">
        Entrar
      </Button>
    </Stack>
  );
}
