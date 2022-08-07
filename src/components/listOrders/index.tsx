import React, { useContext } from 'react';
import { Center, Heading, Spinner, Text, View } from 'native-base';
import { ListOrdersContext } from '@context/listOrdersContext';
import { Order } from './order';

type Props = {
  listOrdersTitle: string;
};

export function ListOrders({ listOrdersTitle }: Props) {
  const { loading } = useContext(ListOrdersContext);

  return (
    <View>
      <Heading fontSize={18} mb={4}>
        {listOrdersTitle}
      </Heading>

      {loading ? (
        <Center pt={100}>
          <Spinner color="primary.500" size={50} mb={'2'} />
          <Text>Carregando chamandos...</Text>
        </Center>
      ) : (
        <Order />
      )}
    </View>
  );
}
