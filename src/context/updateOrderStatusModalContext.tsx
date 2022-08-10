import React, { createContext, PropsWithChildren, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { Orders } from '@/types';

type UpdateOrderModalContextType = {
  showModal: boolean;
  loading: boolean;
  orderSelected: Orders | undefined;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOrderSelected: React.Dispatch<React.SetStateAction<Orders | undefined>>;
  handleUpdateStatus(): Promise<void>;
};

export const UpdateOrderStatusContext = createContext(
  {} as UpdateOrderModalContextType,
);

export function UpdateOrderStatusModalProvider({
  children,
}: PropsWithChildren) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderSelected, setOrderSelected] = useState<Orders>();

  const handleUpdateStatus = async () => {
    try {
      setLoading(true);
      firestore()
        .collection('orders')
        .doc(orderSelected?.id)
        .update({
          status: orderSelected?.status === 'open' ? 'closed' : 'open',
        });
      Alert.alert('Maravilha', 'Atualização realizada com sucesso!');
    } catch (error) {
      console.log(error);
    } finally {
      setShowModal(false);
      setLoading(false);
    }
  };

  return (
    <UpdateOrderStatusContext.Provider
      value={{
        showModal,
        loading,
        orderSelected,
        setShowModal,
        handleUpdateStatus,
        setOrderSelected,
      }}>
      {children}
    </UpdateOrderStatusContext.Provider>
  );
}
