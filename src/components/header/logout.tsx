import React, { useRef, useState } from 'react';
import { AlertDialog, Box, Button, Icon } from 'native-base';
import { useLogout } from '@hooks/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function Logout() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  const { handleLogout } = useLogout();

  return (
    <Box textAlign={'start'}>
      <Button bgColor={'red.600'} onPress={() => setIsOpen(!isOpen)}>
        <Icon as={<MaterialIcons name="logout" />} size={5} color="white" />
      </Button>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Sair do app</AlertDialog.Header>
          <AlertDialog.Body>
            Você deseja realmente deslogar da aplicação ?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}>
                Voltar
              </Button>
              <Button bgColor={'red.600'} onPress={() => handleLogout()}>
                Sair
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Box>
  );
}
