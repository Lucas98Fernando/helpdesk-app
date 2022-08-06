import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { RecoverPassword } from '@/types';
import { Alert } from 'react-native';

export function useRecoverPassword() {
  const [loading, setLoading] = useState(false);

  const handleRecoverPassword = async ({ email }: RecoverPassword) => {
    try {
      setLoading(true);
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Muito bem',
        'O e-mail de redefinição de conta foi enviado com sucesso!',
      );
    } catch (error) {
      Alert.alert(
        'Algo aconteceu',
        'Não foi possível enviar o e-mail, tente novamente em instantes',
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleRecoverPassword };
}
