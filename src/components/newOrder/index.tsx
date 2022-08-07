import React from 'react';
import {
  Actionsheet,
  Button,
  Center,
  Heading,
  Icon,
  useDisclose,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NewOrderForm } from '@components/forms/newOrder';

export function NewOrder() {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <Center mb={4}>
      <Button
        w={'100%'}
        rounded={'lg'}
        colorScheme={'primary'}
        onPress={onOpen}
        leftIcon={
          <Icon
            as={<MaterialIcons name="add" />}
            size={5}
            ml="2"
            color="white"
          />
        }>
        Novo chamado
      </Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content px={4} py={6}>
          <Center h={60}>
            <Heading fontSize="20" color="gray.700">
              Criar novo chamado
            </Heading>
          </Center>

          <NewOrderForm />
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}
