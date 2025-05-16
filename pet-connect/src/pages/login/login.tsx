import { useCallback, useContext, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { loginstyles } from './login-style';
import InputComponent from '@/src/components/InputConnect';
import ButtonComponent from '@/src/components/ButtonConnect';
import { api } from '@/src/api/axios';
import { getToken, setToken } from '@/src/service/tokenService';
import { HttpStatusCode } from 'axios';
import { AuthContext } from '@/src/context/AuthContext';
import { navigate } from '@/src/navigator/app_navigator';
import { PagesNavigator } from '@/src/navigator/pages-navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@/@types/User';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { login, getUserByToken } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);



    const handleLogin = async (email: string, password: string) => {
      setIsLoading(true);
      const { status, data } = await api.post('/auth/login', { email, password });

      if (status !== HttpStatusCode.Ok) throw new Error('Login falhou');

      const token = data?.token;
      setToken(token);

      await getUserByToken();
      setIsLoading(false);
      navigation.replace("Profile");
    };
  



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

          <ButtonComponent title="Entrar"  onPress={() => handleLogin(email, password)} />

          {error && <Text style={loginstyles.textCadastro}>Sucesso</Text>}

        </View>
        <Text style={loginstyles.textCadastro}>Cadastre-se</Text>
      </View>

    </>
  );
};

export default LoginScreen;