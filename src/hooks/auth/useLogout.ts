import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export function useLogout() {
  const handleLogout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      Alert.alert('Aviso', 'Não foi possível fazer o logout');
    }
  };

  return { handleLogout };
}
