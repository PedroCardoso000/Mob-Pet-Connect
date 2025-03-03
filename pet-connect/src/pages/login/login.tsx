import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { loginstyles } from './login-style';
import InputComponent from '@/src/components/InputComponente';
import ButtonComponent from '@/src/components/ButtonComponente';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

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

        <InputComponent placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry 
          styleInput={{ marginBottom: 20 }}
        />

        <ButtonComponent title='Entrar' />

      </View>
      <Text style={loginstyles.textCadastro}>Cadastre-se</Text>
    </View>
  );
};

export default LoginScreen;