import React, { useState } from 'react';
import { Button, Icon, Input, Stack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function RecoverPasswordForm() {
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
      <Button
        color={'primary.500'}
        rounded={10}
        isLoading={isLoading}
        isLoadingText="Enviando...">
        Enviar e-mail
      </Button>
    </Stack>
  );
}
