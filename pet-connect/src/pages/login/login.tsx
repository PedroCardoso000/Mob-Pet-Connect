import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { loginstyles } from './login-style';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={loginstyles.container}>
      {/* Cabeçalho com ícone e título */}
      <View style={loginstyles.headerContainer}>
        <Image
          source={require('../../../assets/icone.png')}
          style={loginstyles.headerIcon}
        />
        <Text style={loginstyles.textLogin}>Login</Text>
      </View>

      {/* Área dos inputs e botão */}
      <View style={loginstyles.footerContainer}>
        {/* Campo de Email */}
        <View style={loginstyles.inputContainer}>
          <Image
            source={require('../../../assets/email.png')}
            style={loginstyles.icon}
          />
          <TextInput
            style={loginstyles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Campo de Senha */}
        <View style={loginstyles.inputContainer}>
          <Image
            source={require('../../../assets/password.png')}
            style={loginstyles.icon}
          />
          <TextInput
            style={loginstyles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Botão de login */}
        <TouchableOpacity style={loginstyles.button} onPress={handleLogin}>
          <Text style={loginstyles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* Texto de cadastro */}
      <Text style={loginstyles.textCadastro}>Cadastre-se</Text>
    </View>
  );
};

export default LoginScreen;