import { TouchableOpacity, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { registerStyles } from "../register-style";
import { Errors } from "@/@types/Errors";
import { FormData } from "@/@types/FormData";

const StepTwoScreenRegister = () => {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        confirmarSenha: ''
    });

    const [errors, setErrors] = useState<Errors>({});
    return (
        <>

            <View style={registerStyles.formContainer}>
                <TextInput
                    style={[registerStyles.input, errors.senha && registerStyles.inputError]}
                    placeholder="Coloque sua senha"
                    value={formData.senha}
                    onChangeText={(text: string) => setFormData({ ...formData, senha: text })}
                    secureTextEntry
                />
                {errors.senha && <Text style={registerStyles.errorText}>{errors.senha}</Text>}

                <TextInput
                    style={[registerStyles.input, errors.confirmarSenha && registerStyles.inputError]}
                    placeholder="Confirmar sua senha"
                    value={formData.confirmarSenha}
                    onChangeText={(text: string) => setFormData({ ...formData, confirmarSenha: text })}
                    secureTextEntry
                />
                {errors.confirmarSenha && <Text style={registerStyles.errorText}>{errors.confirmarSenha}</Text>}
            </View>
        </>
    )
};

export default StepTwoScreenRegister;