import { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { NewOrder } from '@/types';
import { Alert } from 'react-native';

export function useNewOrder() {
  const [loading, setLoading] = useState(false);

  const handleNewOrder = async ({ patrimony, description }: NewOrder) => {
    try {
      setLoading(true);
      firestore().collection('orders').add({
        patrimony,
        description,
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp(),
      });
      Alert.alert('Maravilha', 'O chamado foi aberto com sucesso!');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleNewOrder };
}
