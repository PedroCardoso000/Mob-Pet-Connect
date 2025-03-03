import { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { registerStyles } from './register-style';
import { Errors } from "../../../@types/Errors";
import { FormData } from "../../../@types/FormData";
import StepOneScreenRegister from './step-screens/StepOneScreenRegister';
import StepTwoScreenRegister from './step-screens/StepTwoScreenRegister';
import ButtonComponent from '@/src/components/ButtonComponente';

const RegisterScreen = () => {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: ''
  });

  const [errors, setErrors] = useState<Errors>({});


  const validarStepOne = () => {

    const newErrors: Errors = {};

    if (formData.nome.trim() === "") {
      newErrors.nome = "Nome obrigatório mano";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Lembre-se de preencher o E-mail"
    } else {
      const emailValido = /\S+@\S+\.\S+/;
      if (!emailValido.test(formData.email)) {
        newErrors.email = "Este E-mail não é válido!!";
      }
    }

    const telefone = formData.telefone.trim();

    if (telefone === "") {
      newErrors.telefone = "Telefone obrigatório, meu irmão";
    }
    else {
      const telefoneLimpo = telefone.replace(/\D/g, "");
      if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
        newErrors.telefone = "Número de telefone inválido, meu irmão";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  };


  const validarStepTwo = () => {


    const newErrors: Record<string, string> = {};
    newErrors.foo = "foo";
    console.log(newErrors);

    const senha = formData.senha.trim();
    const confirmarSenha = formData.confirmarSenha.trim();

    if (!senha) {
      newErrors.senha = "A senha é obrigatória!!";
    } else if (senha.length < 6) {
      newErrors.senha = "Senha deve ter pelo menos 6 caracteres!!";
    }

    if (!confirmarSenha) {
      newErrors.confirmarSenha = "Confirmação de senha é obrigatória!!!";
    }
    else if (senha != confirmarSenha) {
      newErrors.confirmarSenha = "As senhas estão diferentes";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleContinue = () => {
    if (step === 1) {
      if (validarStepOne()) {
        setStep(2);
      } else {
        Alert.alert('Erro', 'Por favor, preencha todos os campos');
      }
    } else {
      if (validarStepTwo()) {
        console.log('Dados do consagrado: ', formData);
        Alert.alert('Sucesso', ' Cadastro realizado com sucesso')
      } else {
        Alert.alert('Erro', '!! Por favor verifique a sua senha');
      }
    }
  };


  return (
    <View style={registerStyles.container}>
      <View style={registerStyles.headerContainer}>
        <Image
          source={require('../../../assets/icone.png')}
          style={registerStyles.logo}
        />

        <Text style={registerStyles.title}>Cadastro</Text>
      </View>

      {step === 1 ? <StepOneScreenRegister /> : <StepTwoScreenRegister />}

      <ButtonComponent  title='Continuar' />

      <View style={registerStyles.dotsContainer}>
        <TouchableOpacity onPress={() => setStep(1)}>
          <View style={[
            registerStyles.dot,
            step === 1 ? registerStyles.activeDot : registerStyles.inactiveDot
          ]} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setStep(2)}>
          <View style={[
            registerStyles.dot,
            step === 2 ? registerStyles.activeDot : registerStyles.inactiveDot
          ]} />
        </TouchableOpacity>
      </View>


    </View>

  );
};

export default RegisterScreen;