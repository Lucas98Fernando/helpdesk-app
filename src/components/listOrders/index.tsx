import React from 'react';
import {
  Box,
  FlatList,
  Heading,
  Icon,
  Spinner,
  Text,
  View,
  VStack,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useListOrders } from '@hooks/order/useListOrders';

type Props = {
  listOrdersTitle: string;
};

export function ListOrders({ listOrdersTitle }: Props) {
  const { loading, orders } = useListOrders();

  return (
    <View>
      <Heading fontSize={18} mb={4}>
        {listOrdersTitle}
      </Heading>

      {loading ? (
        <View pt={100}>
          <Spinner color="primary.500" size={50} />
        </View>
      ) : (
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
              borderColor="success.600"
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
                  as={<MaterialIcons name="schedule" />}
                  size={5}
                  color="primary.600"
                />
              </VStack>
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}
