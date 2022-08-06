import React, { useState } from 'react';
import { Button, Icon, Input, Stack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRecoverPassword } from '../../../hooks/auth';

export function RecoverPasswordForm() {
  const [email, setEmail] = useState('');

  const { loading, handleRecoverPassword } = useRecoverPassword();

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
      <Button
        color={'primary.500'}
        rounded={10}
        isLoading={loading}
        isLoadingText="Enviando e-mail..."
        onPress={() => handleRecoverPassword({ email })}>
        Enviar e-mail
      </Button>
    </Stack>
  );
}
