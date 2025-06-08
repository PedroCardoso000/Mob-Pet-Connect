import { useContext, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { loginstyles } from './login-style';
import InputComponent from '@/src/components/InputConnect';
import ButtonComponent from '@/src/components/ButtonConnect';
import { AuthContext } from '@/src/context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/src/navigator/navigator-simple-app';
import Loading from '@/src/components/Loading';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await login(email, password);
      if (response === null || response === undefined) {
        setError(true)
        return;
      };
      return response;
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading />;

  return (
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

        <InputComponent
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          styleInput={{ marginBottom: 20 }}
        />

        <ButtonComponent title="Entrar" onPress={() => handleLogin(email, password)} />

        {error && <Text style={{ color: 'red' }}>Erro ao fazer login</Text>}
      </View>

      <TouchableOpacity onPress={() => navigation.replace('Register')}>
        <Text style={loginstyles.textCadastro}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
