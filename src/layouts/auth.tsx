import React, { PropsWithChildren } from 'react';
import { Center, Container } from 'native-base';

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Center flex={1}>
      <Container>{children}</Container>
    </Center>
  );
}
