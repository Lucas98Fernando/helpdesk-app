import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { User } from '@/types';
import { Alert } from 'react-native';

export function useSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async ({ email, password }: User) => {
    try {
      if (email && password) {
        setLoading(true);
        await auth().signInWithEmailAndPassword(email, password);
      } else {
        Alert.alert('Aviso', 'Informe o e-mail e senha');
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Algo aconteceu', 'Não foi possível fazer login');
    }
  };

  return { showPassword, setShowPassword, loading, handleSignIn };
}
