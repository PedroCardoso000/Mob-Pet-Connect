import ButtonComponent from '@/src/components/ButtonConnect';
import { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { Errors } from "../../../@types/Errors";
import { FormData } from "../../../@types/FormData";
import { registerStyles } from './register-style';
import StepOneScreenRegister from './step-screens/StepOneScreenRegister';
import StepTwoScreenRegister from './step-screens/StepTwoScreenRegister';
import { api } from '@/src/api/axios';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/src/navigator/navigator-simple-app';
const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<Errors>({});


  const validarStepOne = () => {

    const newErrors: Errors = {};

    console.log(JSON.stringify(formData))
    if (formData.name.trim() === "") {
      newErrors.name = "Nome obrigatório";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Lembre-se de preencher o E-mail"
    } else {
      const emailValido = /\S+@\S+\.\S+/;
      if (!emailValido.test(formData.email)) {
        newErrors.email = "Este E-mail não é válido!!";
      }
    }

    const telefone = formData.phone.trim();

    if (telefone === "") {
      newErrors.phone = "Telefone obrigatório";
    }
    else {
      const telefoneLimpo = telefone.replace(/\D/g, "");
      if (telefoneLimpo.length <= 8 || telefoneLimpo.length >= 10) {
        newErrors.phone = "Número de telefone inválido";
      }
    }

    setErrors(newErrors);
    console.log("Teste", newErrors);
    return Object.keys(newErrors).length === 0;

  };


  const validarStepTwo = () => {


    const newErrors: Record<string, string> = {};

    const senha = formData.password.trim();
    const confirmarSenha = formData.confirmPassword.trim();

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


  const handleContinue = async () => {


    if (step === 1) {
      if (validarStepOne()) {
        setStep(2);
      } else {
        Alert.alert('Erro', 'Por favor, preencha todos os campos');
      }
    } else {
      // if (validarStepTwo()) {
      const response = await api.post('/user', formData);

      //   Alert.alert('Sucesso', ' Cadastro realizado com sucesso');
      // } else {
      //   Alert.alert('Erro', '!! Por favor verifique a sua senha');
      // }
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

      {step === 1 ? <StepOneScreenRegister setFormData={setFormData} formData={formData} /> : <StepTwoScreenRegister setFormData={setFormData} formData={formData} />}

      <ButtonComponent title='Continuar'
        onPress={handleContinue}
      />

      <TouchableOpacity onPress={() => navigation.replace('Login')}>
        <Text style={registerStyles.cadastre}>Já estou cadastrado</Text>
      </TouchableOpacity>

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