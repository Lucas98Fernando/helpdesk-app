import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { User } from '@/types';
import { Alert } from 'react-native';

export function useSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async ({ email, password }: User) => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert('Algo aconteceu', 'Não foi possível fazer login');
    } finally {
      setLoading(false);
    }
  };

  return { showPassword, setShowPassword, loading, handleSignIn };
}
