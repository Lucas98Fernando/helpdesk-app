import React from 'react';
import { Box, Heading, HStack, Text } from 'native-base';
import { Logout } from './logout';

export function Header() {
  return (
    <HStack justifyContent="space-between" alignItems="center" w="100%">
      <Box>
        <Heading color={'primary.900'}>HelpDesk</Heading>
        <Text color={'muted.600'}>Acompanhe os seus chamados</Text>
      </Box>
      <Logout />
    </HStack>
  );
}
