import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Orders } from '@/types';

export function useListOrders() {
  const [status, setStatus] = useState<'open' | 'closed'>('open');
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Orders[]>([]);

  useEffect(() => {
    setLoading(true);
    const subscriber = firestore()
      .collection('orders')
      .where('status', '==', status)
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as Orders[];

        setOrders(data);
        setLoading(false);
      });

    return () => subscriber();
  }, [status]);

  return { status, setStatus, loading, orders };
}
