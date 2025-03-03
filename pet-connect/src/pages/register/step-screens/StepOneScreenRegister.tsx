import { TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { registerStyles } from "../register-style";
import { Errors } from "@/@types/Errors";
import { FormData } from "@/@types/FormData";


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
                <TextInput
                    style={[registerStyles.input, errors.nome && registerStyles.inputError]}
                    placeholder="Nome"
                    value={formData.nome}
                    onChangeText={(text: string) => setFormData({ ...formData, nome: text })}
                />
                {errors.nome && <Text style={registerStyles.errorText}>{errors.nome}</Text>}

                <TextInput
                    style={[registerStyles.input, errors.email && registerStyles.inputError]}
                    placeholder="Email"
                    value={formData.email}
                    onChangeText={(text: string) => setFormData({ ...formData, email: text })}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                {errors.email && <Text style={registerStyles.errorText}>{errors.email}</Text>}

                <TextInput
                    style={[registerStyles.input, errors.telefone && registerStyles.inputError]}
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChangeText={(text: string) => setFormData({ ...formData, telefone: text })}
                    keyboardType="phone-pad"
                />
                {errors.telefone && <Text style={registerStyles.errorText}>{errors.telefone}</Text>}
            </View>

        </>
    )
};

export default StepOneScreenRegister;