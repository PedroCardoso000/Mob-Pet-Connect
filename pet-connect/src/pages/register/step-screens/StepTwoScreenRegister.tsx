import { TouchableOpacity, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { registerStyles } from "../register-style";
import { Errors } from "@/src/@types/Errors";
import { FormData } from "@/src/@types/FormData";
import InputComponent from "@/src/components/InputConnect";

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
                <InputComponent placeholder="Senha" icon="../../../assets/password.png" />
                {errors.senha && <Text style={registerStyles.errorText}>{errors.senha}</Text>}

                <InputComponent placeholder="Confirmar Senha" icon="../../../assets/password.png" />
                {errors.confirmarSenha && <Text style={registerStyles.errorText}>{errors.confirmarSenha}</Text>}
            </View>
        </>
    )
};

export default StepTwoScreenRegister;