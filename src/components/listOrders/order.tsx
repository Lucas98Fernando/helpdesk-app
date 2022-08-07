import React, { useContext } from 'react';
import { Box, FlatList, Heading, Icon, Text, VStack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ListOrdersContext } from '@context/listOrdersContext';

export function Order() {
  const { status, orders } = useContext(ListOrdersContext);

  const isOrderOpen = status === 'open';

  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => (
        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          borderRadius={6}
          bgColor={'coolGray.200'}
          borderLeftWidth="2"
          borderColor={isOrderOpen ? 'primary.600' : 'success.600'}
          pl="4"
          pr="5"
          py="2"
          mb="3">
          <VStack space={2} justifyContent="space-between">
            <Heading fontSize="18">{item.patrimony}</Heading>
            <Text>{item.description}</Text>
          </VStack>
          <VStack>
            <Icon
              as={<MaterialIcons name={isOrderOpen ? 'schedule' : 'check'} />}
              size={5}
              color={isOrderOpen ? 'primary.600' : 'success.600'}
            />
          </VStack>
        </Box>
      )}
      keyExtractor={item => item.id}
    />
  );
}
