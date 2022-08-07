import React, { useState } from 'react';
import { Button, Icon, Input, Stack, TextArea } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNewOrder } from '@hooks/order';

export function NewOrderForm() {
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');

  const { loading, handleNewOrder } = useNewOrder();

  return (
    <Stack space="5" w="100%" alignItems="center">
      <Input
        value={patrimony}
        onChangeText={setPatrimony}
        rounded="10"
        isFullWidth
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="description" />}
            size="5"
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Nome do patrimônio"
      />
      <TextArea
        autoCompleteType
        value={description}
        onChangeText={setDescription}
        rounded="10"
        isFullWidth
        placeholder="Descrição"
      />
      <Button
        w="100%"
        colorScheme="primary"
        rounded="10"
        isLoading={loading}
        isLoadingText="Abrindo..."
        onPress={() => handleNewOrder({ patrimony, description })}>
        Abrir chamado
      </Button>
    </Stack>
  );
}
