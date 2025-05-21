import { Errors } from "@/@types/Errors";
import { FormData } from "@/@types/FormData";
import InputComponent from "@/src/components/InputConnect";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { registerStyles } from "../register-style";

const StepOneScreenRegister = (props: any) => {
    const [errors, setErrors] = useState<Errors>({});


    return (
        <>

            <View style={registerStyles.formContainer}>
                <InputComponent onChange={e => props.setFormData({ ...props.formData, name: e.nativeEvent.text })} placeholder="Nome" icon="../../../assets/password.png" />
                {errors.name && <Text style={registerStyles.errorText}>{errors.name}</Text>}

                <InputComponent onChange={e => props.setFormData({ ...props.formData, email: e.nativeEvent.text })} placeholder="Email" icon="../../../../assets/password.png" />
                {errors.email && <Text style={registerStyles.errorText}>{errors.email}</Text>}

                <InputComponent onChange={e => props.setFormData({ ...props.formData, phone: e.nativeEvent.text })} placeholder="phone" icon="../../../../assets/password.png" />
                {errors.phone && <Text style={registerStyles.errorText}>{errors.phone}</Text>}

                <InputComponent onChange={e => props.setFormData({ ...props.formData, cpf: e.nativeEvent.text })} placeholder="CPF" icon="../../../../assets/password.png" />
                {errors.cpf && <Text style={registerStyles.errorText}>{errors.cpf}</Text>}
            </View>

        </>
    )
};

export default StepOneScreenRegister;