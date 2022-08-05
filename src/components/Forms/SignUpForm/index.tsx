import React, { useState } from 'react';
import { Button, Icon, Input, Stack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading] = useState(false);

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
      <Button
        color={'primary.500'}
        rounded={10}
        isLoading={isLoading}
        isLoadingText="Entrando...">
        Cadastrar
      </Button>
    </Stack>
  );
}
