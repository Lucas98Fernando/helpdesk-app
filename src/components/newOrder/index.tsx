import React from 'react';
import {
  Actionsheet,
  Box,
  Button,
  Center,
  Icon,
  Text,
  useDisclose,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function NewOrder() {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <Center mb={4}>
      <Button
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
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}>
              Criar novo chamado
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}
