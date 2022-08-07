import React from 'react';
import { Button, Center, View } from 'native-base';
import { HomeLayout } from '@layouts/home';
import { NewOrder } from '@components/newOrder';
import { ListOrders } from '@components/listOrders';
import { useListOrders } from '@hooks/order/useListOrders';

export function Home() {
  const { status, setStatus } = useListOrders();

  return (
    <HomeLayout footerContent={<NewOrder />}>
      <Center mt="8">
        <Button.Group isAttached colorScheme="primary" size="md">
          <Button onPress={() => setStatus('open')} colorScheme="success">
            Abertos
          </Button>
          <Button onPress={() => setStatus('closed')} colorScheme="primary">
            Fechados
          </Button>
        </Button.Group>
      </Center>

      <View mt="6">
        <ListOrders
          listOrdersTitle={`Chamados ${
            status === 'open' ? 'abertos' : 'fechados'
          }`}
        />
      </View>
    </HomeLayout>
  );
}
