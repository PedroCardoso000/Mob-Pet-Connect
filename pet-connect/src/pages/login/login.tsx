import { useCallback, useContext, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { loginstyles } from './login-style';
import InputComponent from '@/src/components/InputConnect';
import ButtonComponent from '@/src/components/ButtonConnect';
import { api } from '@/src/api/axios';
import { getToken, setToken } from '@/src/service/tokenService';
import { HttpStatusCode } from 'axios';
import { AuthContext } from '@/src/context/AuthContext';
const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  async function handleLogin(email: string, password: string) {

    try {
      if (email && password) {
        setIsLoading(true);
        const response = await login(email, password);
        
      } else {
        console.warn('Preencha todos os campos!');
      }
    } catch (error) {
      setError(true);
      console.error('Erro ao fazer login:');
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

          {error && <Text style={loginstyles.textCadastro}>Sucesso</Text>}

        </View>
        <Text style={loginstyles.textCadastro}>Cadastre-se</Text>
      </View>

    </>
  );
};

export default LoginScreen;