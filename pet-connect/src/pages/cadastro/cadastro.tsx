import { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./cadastro-style";

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

const Cadastro = () => {
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

    // const handleContinue2 = () => {

    //     if(step === 1) {
    //         if(!validarStep1()) return;
    //         setStep(2);
    //         return;
    //     }

    //     if(!validarStep2()) return;
        
    //     console.log('Dados do consagrado: ', formData);
    //     Alert.alert('Sucesso', ' Cadastro realizxado com sucesso');
    // };


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
            
            <View style = {styles.headerContainer}>
                <Image
                source={require('Mob-Pet-Connect\pet-connect\assets\icone.png')}
                style = {styles.logo}
                />
                
                <Text style={styles.title}>Cadastro</Text>
            </View>

            {step === 1 ? (
                <View style={styles.formContainer}>
                    <TextInput
                        style={[styles.input, errors.nome && styles.inputError]}
                        placeholder="Nome"
                        value={formData.nome}
                        onChangeText={(text : string) => setFormData({...formData, nome: text})}
                    />
                    {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}
                    
                    <TextInput
                        style={[styles.input, errors.email && styles.inputError]}
                        placeholder="Email"
                        value={formData.email}
                        onChangeText={(text: string) => setFormData({...formData, email: text})}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                    
                    <TextInput
                        style={[styles.input, errors.telefone && styles.inputError]}
                        placeholder="Telefone"
                        value={formData.telefone}
                        onChangeText={(text: string) => setFormData({...formData, telefone: text})}
                        keyboardType="phone-pad"
                    />
                    {errors.telefone && <Text style={styles.errorText}>{errors.telefone}</Text>}
                </View>
            ) : (
                <View style={styles.formContainer}>
                    <TextInput
                        style={[styles.input, errors.senha && styles.inputError]}
                        placeholder="Coloque sua senha"
                        value={formData.senha}
                        onChangeText={(text: string) => setFormData({...formData, senha: text})}
                        secureTextEntry
                    />
                    {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}
                    
                    <TextInput
                        style={[styles.input, errors.confirmarSenha && styles.inputError]}
                        placeholder="Confirmar sua senha"
                        value={formData.confirmarSenha}
                        onChangeText={(text: string) => setFormData({...formData, confirmarSenha: text})}
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

};

export default Cadastro;
