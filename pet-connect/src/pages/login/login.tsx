import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { loginstyles } from './login-style';
import InputComponent from '@/src/components/InputConnect';
import ButtonComponent from '@/src/components/ButtonConnect';
import { api } from '@/src/api/axios';
import Toast from 'react-native-toast-message';
import { getToken } from '@/src/service/tokenService';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const showToast = (type: 'success' | 'error', text1: string, text2: string) => {
    Toast.show({
      type,
      text1,
      text2,
      position: 'top', // ou 'bottom'
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 50,

    });
  };

  async function handleLogin(email: string, password: string) {
    const token = await getToken();
    try {
      if (email && password) {
        setIsLoading(true);
   
        const response = await api.post(
          '/auth/login',
          { email, password },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log('Login realizado com sucesso!', response.data);
        showToast('success', 'Login efetuado com sucesso!', 'Bem-vindo ao app 🚀');
      } else {
        console.warn('Preencha todos os campos!', token);
        showToast('error', 'Erro ao fazer login', 'Preencha todos os campos.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', token);
      showToast('error', 'Erro ao fazer login', 'Tente novamente mais tarde');
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <>
      <View style={loginstyles.container}>
        <View style={loginstyles.headerContainer}>
          <Image
            source={require('../../../assets/icone.png')}
            style={loginstyles.headerIcon}
          />
          <Text style={loginstyles.textLogin}>Login</Text>
        </View>

        <View style={loginstyles.footerContainer}>

          <InputComponent
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <InputComponent placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            styleInput={{ marginBottom: 20 }}
          />

          <ButtonComponent title="Entrar" onPress={() => handleLogin(email, password)} />


        </View>
        <Text style={loginstyles.textCadastro}>Cadastre-se</Text>
      </View>

    </>
  );
};

export default LoginScreen;