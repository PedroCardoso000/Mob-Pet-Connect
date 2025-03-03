import { TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { registerStyles } from "../register-style";
import { Errors } from "@/@types/Errors";
import { FormData } from "@/@types/FormData";
import InputComponent from "@/src/components/InputComponente";

const StepOneScreenRegister = () => {
    const [errors, setErrors] = useState<Errors>({});

    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        confirmarSenha: ''
    });


    return (
        <>

            <View style={registerStyles.formContainer}>
                <InputComponent placeholder="Nome" icon="../../../assets/password.png"/>
                {errors.nome && <Text style={registerStyles.errorText}>{errors.nome}</Text>}

                <InputComponent placeholder="Email" icon="../../../../assets/password.png"/>
                {errors.email && <Text style={registerStyles.errorText}>{errors.email}</Text>}

                <InputComponent placeholder="Telefone" icon="../../../../assets/password.png"/>
                {errors.telefone && <Text style={registerStyles.errorText}>{errors.telefone}</Text>}
            </View>

        </>
    )
};

export default StepOneScreenRegister;