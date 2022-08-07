import React, { useContext } from 'react';
import { Button, Center, View } from 'native-base';
import { HomeLayout } from '@layouts/home';
import { NewOrder } from '@components/newOrder';
import { ListOrders } from '@components/listOrders';
import { ListOrdersContext } from '@context/listOrdersContext';

export function Home() {
  const { status, setStatus } = useContext(ListOrdersContext);

  return (
    <HomeLayout footerContent={<NewOrder />}>
      <Center mt="8">
        <Button.Group isAttached colorScheme="primary" size="md">
          <Button
            onPress={() => setStatus('open')}
            colorScheme="primary"
            variant={status === 'open' ? 'solid' : 'outline'}>
            Abertos
          </Button>
          <Button
            onPress={() => setStatus('closed')}
            colorScheme="success"
            variant={status === 'closed' ? 'solid' : 'outline'}>
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
