import React, { useContext } from 'react';
import { Box, FlatList, Heading, Icon, Text, VStack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ListOrdersContext } from '@context/listOrdersContext';
import { TouchableOpacity } from 'react-native';
import { UpdateOrderStatusContext } from '@context/updateOrderStatusModalContext';
import { UpdateOrderStatusModal } from '../modal/updateOrderStatusModal';

export function Order() {
  const { status, orders } = useContext(ListOrdersContext);

  const { setShowModal, setOrderSelected } = useContext(
    UpdateOrderStatusContext,
  );

  const isOrderOpen = status === 'open';

  return (
    <>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setShowModal(true);
              setOrderSelected(item);
            }}>
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
                  as={
                    <MaterialIcons name={isOrderOpen ? 'schedule' : 'check'} />
                  }
                  size={5}
                  color={isOrderOpen ? 'primary.600' : 'success.600'}
                />
              </VStack>
            </Box>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <UpdateOrderStatusModal status={status} />
    </>
  );
}
