import React, { useContext } from 'react';
import { Button, Modal, Text } from 'native-base';
import { UpdateOrderStatusContext } from '@context/updateOrderStatusModalContext';
import { StatusOrder } from '@/types';

type Props = {
  status: StatusOrder;
};

export function UpdateOrderStatusModal({ status }: Props) {
  const { showModal, setShowModal, handleUpdateStatus } = useContext(
    UpdateOrderStatusContext,
  );

  const isOrderOpen = status === 'open';

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Atualizar status</Modal.Header>
        <Modal.Body>
          <Text>{`Deseja ${
            isOrderOpen ? 'fechar' : 'reabrir'
          } o chamado?`}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
              }}>
              Cancelar
            </Button>
            <Button
              onPress={() => {
                handleUpdateStatus();
              }}>
              {`${isOrderOpen ? 'Fechar' : 'Reabrir'} chamado`}
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
