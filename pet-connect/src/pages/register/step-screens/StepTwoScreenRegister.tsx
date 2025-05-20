import { TouchableOpacity, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { registerStyles } from "../register-style";
import { Errors } from "@/@types/Errors";
import { FormData } from "@/@types/FormData";
import InputComponent from "@/src/components/InputConnect";

const StepTwoScreenRegister = (props: any) => {
    // const [formData, setFormData] = useState<FormData>({
    //     nome: '',
    //     email: '',
    //     telefone: '',
    //     senha: '',
    //     confirmarSenha: ''
    // });

    const [errors, setErrors] = useState<Errors>({});
    return (
        <>
            <View style={registerStyles.formContainer}>
                <InputComponent onChange={e => props.setFormData({...props.formData, senha: e.nativeEvent.text})} placeholder="Senha" icon="../../../assets/password.png" />
                {errors.senha && <Text style={registerStyles.errorText}>{errors.senha}</Text>}

                <InputComponent onChange={e => props.setFormData({...props.formData, confirmarSenha: e.nativeEvent.text})} placeholder="Confirmar Senha" icon="../../../assets/password.png" />
                {errors.confirmarSenha && <Text style={registerStyles.errorText}>{errors.confirmarSenha}</Text>}
            </View>
        </>
    )
};

export default StepTwoScreenRegister;