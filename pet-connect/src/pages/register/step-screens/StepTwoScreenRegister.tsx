import { TouchableOpacity, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { registerStyles } from "../register-style";
import { Errors } from "@/src/@types/Errors";
import { FormData } from "@/src/@types/FormData";
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
                <InputComponent onChange={e => props.setFormData({...props.formData, password: e.nativeEvent.text})} placeholder="Senha" icon="../../../assets/password.png" />
                {errors.password && <Text style={registerStyles.errorText}>{errors.password}</Text>}

                <InputComponent onChange={e => props.setFormData({...props.formData, confirmPassword: e.nativeEvent.text})} placeholder="Confirmar Senha" icon="../../../assets/password.png" />
                {errors.confirmPassword && <Text style={registerStyles.errorText}>{errors.confirmPassword}</Text>}
            </View>
        </>
    )
};

export default StepTwoScreenRegister;