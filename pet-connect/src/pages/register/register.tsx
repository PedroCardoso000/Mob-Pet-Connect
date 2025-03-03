import { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {  registerStyles } from './register-style';

interface FormData {
    nome: string;
    email: string;
    telefone: string;
    senha: string;
    confirmarSenha: string;
  }

interface Errors {
    nome?: string;
    email?: string;
    telefone?: string;
    senha?: string;
    confirmarSenha?: string;
  }
const RegisterScreen = () => {

    const [step,setStep] = useState(1);

    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        telefone:'',
        senha:'',
        confirmarSenha:''
    });

    const [errors, setErrors] = useState<Errors>({});

    
    const validarStep1 = () => {
        
        const newErrors: Errors = {};
        
        if(formData.nome.trim() === ""){
            newErrors.nome = "Nome obrigatório mano";
        }
        if(formData.email.trim() === ""){
            newErrors.email = "Lembre-se de preencher o E-mail"
        } else{
            const emailValido = /\S+@\S+\.\S+/;
            if(!emailValido.test(formData.email)){
                newErrors.email = "Este E-mail não é válido!!";
            }
        }
        
        const telefone = formData.telefone.trim();

        if (telefone === "") {
            newErrors.telefone = "Telefone obrigatório, meu irmão";
        } 
        // Verificando se o telefone contém apenas números e tem o tamanho esperado
        else {
            const telefoneLimpo = telefone.replace(/\D/g, ""); // Remove tudo que não for número
            if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
                newErrors.telefone = "Número de telefone inválido, meu irmão";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
        
    };


    const validarStep2 = () => {


        const newErrors: Record<string,string> = {};
        newErrors.foo = "foo";
        console.log(newErrors);
        
        // formData é apenas um armazenamento de dados
        // newErrors é apenas um reconhecimento de erros 
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
        if(step ===1){
            if(validarStep1()){
                setStep(2);
            } else{
                Alert.alert('Erro', 'Por favor, preencha todos os campos');
            }
        } else{
            if(validarStep2()){
                console.log('Dados do consagrado: ', formData);
                Alert.alert('Sucesso', ' Cadastro realizado com sucesso')
            } else{
                Alert.alert('Erro', '!! Por favor verifique a sua senha');
            }
        }
    };


    return (
        <View style={registerStyles.container}>
            
            <View style = {registerStyles.headerContainer}>
                <Image
                  source={require('../../../assets/icone.png')}
                style = {registerStyles.logo}
                />
                
                <Text style={registerStyles.title}>Cadastro</Text>
            </View>

            {step === 1 ? (
                <View style={registerStyles.formContainer}>
                    <TextInput
                        style={[registerStyles.input, errors.nome && registerStyles.inputError]}
                        placeholder="Nome"
                        value={formData.nome}
                        onChangeText={(text : string) => setFormData({...formData, nome: text})}
                    />
                    {errors.nome && <Text style={registerStyles.errorText}>{errors.nome}</Text>}
                    
                    <TextInput
                        style={[registerStyles.input, errors.email && registerStyles.inputError]}
                        placeholder="Email"
                        value={formData.email}
                        onChangeText={(text: string) => setFormData({...formData, email: text})}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {errors.email && <Text style={registerStyles.errorText}>{errors.email}</Text>}
                    
                    <TextInput
                        style={[registerStyles.input, errors.telefone && registerStyles.inputError]}
                        placeholder="Telefone"
                        value={formData.telefone}
                        onChangeText={(text: string) => setFormData({...formData, telefone: text})}
                        keyboardType="phone-pad"
                    />
                    {errors.telefone && <Text style={registerStyles.errorText}>{errors.telefone}</Text>}
                </View>
            ) : (
                <View style={registerStyles.formContainer}>
                    <TextInput
                        style={[registerStyles.input, errors.senha && registerStyles.inputError]}
                        placeholder="Coloque sua senha"
                        value={formData.senha}
                        onChangeText={(text: string) => setFormData({...formData, senha: text})}
                        secureTextEntry
                    />
                    {errors.senha && <Text style={registerStyles.errorText}>{errors.senha}</Text>}
                    
                    <TextInput
                        style={[registerStyles.input, errors.confirmarSenha && registerStyles.inputError]}
                        placeholder="Confirmar sua senha"
                        value={formData.confirmarSenha}
                        onChangeText={(text: string) => setFormData({...formData, confirmarSenha: text})}
                        secureTextEntry
                    />
                    {errors.confirmarSenha && <Text style={registerStyles.errorText}>{errors.confirmarSenha}</Text>}
                </View>
            )}

            <TouchableOpacity 
                style={registerStyles.button}
                onPress={handleContinue}
                >
                <Text style={registerStyles.buttonText}>Continuar</Text>
            </TouchableOpacity>

            <View style={registerStyles.dotsContainer}>
                <View style={[
                    registerStyles.dot,
                    step === 1 ? registerStyles.activeDot : registerStyles.inactiveDot
                ]} />
                <View style={[
                    registerStyles.dot,
                    step === 2 ? registerStyles.activeDot : registerStyles.inactiveDot
                ]} />
            </View>

        </View>
        
    );
};

export default RegisterScreen;