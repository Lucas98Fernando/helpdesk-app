import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { User } from '@/types';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function useSignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation: Record<any, any> = useNavigation();

  const handleSignUp = async ({ email, password }: User) => {
    try {
      if (email && password) {
        setLoading(true);
        await auth().createUserWithEmailAndPassword(email, password);
        Alert.alert('Muito bem', 'Conta criada com sucesso!');
        navigation.navigate('signIn');
      } else {
        Alert.alert(
          'Aviso',
          'É preciso informar o e-mail e senha para prosseguir',
        );
      }
    } catch (error) {
      Alert.alert('Algo aconteceu', 'Não foi possível criar o usuário');
    } finally {
      setLoading(false);
    }
  };

  return { showPassword, setShowPassword, loading, handleSignUp };
}
