import React from 'react';
import { Button, Center } from 'native-base';
import { HomeLayout } from '@layouts/home';
import { NewOrder } from '@components/newOrder';

export function Home() {
  return (
    <HomeLayout footerContent={<NewOrder />}>
      <Center mt={8}>
        <Button.Group isAttached colorScheme="primary" size="md">
          <Button>Abertos</Button>
          <Button variant="outline">Fechados</Button>
        </Button.Group>
      </Center>
    </HomeLayout>
  );
}
