import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import firestore from '@react-native-firebase/firestore';
import { Orders, StatusOrder } from '@/types';

type ListOrdersContextType = {
  status: StatusOrder;
  loading: boolean;
  orders: Orders[];
  setStatus: React.Dispatch<React.SetStateAction<StatusOrder>>;
};

export const ListOrdersContext = createContext({} as ListOrdersContextType);

export function ListOrdersProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<StatusOrder>('open');
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

  return (
    <ListOrdersContext.Provider value={{ status, loading, orders, setStatus }}>
      {children}
    </ListOrdersContext.Provider>
  );
}
