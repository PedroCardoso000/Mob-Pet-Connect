import React, { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './cadastro_style';

const Cadastro = () => {
    const [step,setStep] = useState(1);

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone:'',
        senha:'',
        confirmarSenha:''
    });

    const [errors, setErrors] = useState({});
    

    const validarStep1 = () => {
        const newErrors = () => newErrors

        if(!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório meu Dog'; 
        if(!formData.email.trim()) newErrors.email = 'Email é obrigatório meu Dog';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido meu Dog';
        if(!formData.telefone.trim()) newErrors.telefone = 'Telefone obrigatório meu irmão';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
        
    };


    const validarStep2 = () => {
        const newErrors = () => newErrors
        if (!formData.senha) newErrors.senha = 'Senha é obrigatória';
        else if (formData.senha.length < 6) newErrors.senha = 'Senha deve ter pelo menos 6 caracteres';
        if (formData.senha !== formData.confirmarSenha) newErrors.confirmarSenha = 'Senhas não coincidem';
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
                Alert.alert('Sucesso', ' Cadastro realizxado com sucesso')
            } else{
                Alert.alert('Erro', '!! Por favor verifique a sua senha');
            }
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={require('../../assets/pet-connect-logo.svg')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Cadastro</Text>
            </View>

            {step === 1 ? (
                <View style={styles.formContainer}>
                    <TextInput
                        style={[styles.input, errors.nome && styles.inputError]}
                        placeholder="Nome"
                        value={formData.nome}
                        onChangeText={(text) => setFormData({...formData, nome: text})}
                    />
                    {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}
                    
                    <TextInput
                        style={[styles.input, errors.email && styles.inputError]}
                        placeholder="Email"
                        value={formData.email}
                        onChangeText={(text) => setFormData({...formData, email: text})}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                    
                    <TextInput
                        style={[styles.input, errors.telefone && styles.inputError]}
                        placeholder="Telefone"
                        value={formData.telefone}
                        onChangeText={(text) => setFormData({...formData, telefone: text})}
                        keyboardType="phone-pad"
                    />
                    {errors.telefone && <Text style={styles.errorText}>{errors.telefone}</Text>}
                </View>
            ) : (
                <View style={styles.formContainer}>
                    <TextInput
                        style={[styles.input, errors.senha && styles.inputError]}
                        placeholder="Senha"
                        value={formData.senha}
                        onChangeText={(text) => setFormData({...formData, senha: text})}
                        secureTextEntry
                    />
                    {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}
                    
                    <TextInput
                        style={[styles.input, errors.confirmarSenha && styles.inputError]}
                        placeholder="Confirmar Senha"
                        value={formData.confirmarSenha}
                        onChangeText={(text) => setFormData({...formData, confirmarSenha: text})}
                        secureTextEntry
                    />
                    {errors.confirmarSenha && <Text style={styles.errorText}>{errors.confirmarSenha}</Text>}
                </View>
            )}

            <TouchableOpacity 
                style={styles.button}
                onPress={handleContinue}
            >
                <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>

            <View style={styles.dotsContainer}>
                <View style={[
                    styles.dot,
                    step === 1 ? styles.activeDot : styles.inactiveDot
                ]} />
                <View style={[
                    styles.dot,
                    step === 2 ? styles.activeDot : styles.inactiveDot
                ]} />
            </View>
        </View>
    );

}