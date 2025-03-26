import { View, Text, Image, TouchableOpacity } from "react-native";
import styleConfigScreen from "./configScreen-style";
import InputComponent from "@/src/components/InputConnect";
import React, { useState } from "react";
import CheckBox from "@/src/components/CheckBox";
import ButtonComponent from "@/src/components/ButtonConnect";

const ConfigScreen = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [birth, setBirth] = useState<string | undefined>();
    const [phone, setPhone] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [sex, setSex] = useState<string>('');

    return (
        <View style={styleConfigScreen.container}>
            <View style={styleConfigScreen.header}>
                <Image source={require("@/assets/user.png")} />
                <Text>Adicionar uma imagem</Text>
            </View>
            <View style={styleConfigScreen.footer}>
                <InputComponent
                    placeholder="Nome"
                    value={name}
                    icon={require("@/assets/password.png")}
                    onChangeText={setName}
                    keyboardType="name-phone-pad"
                    autoCapitalize="none"
                />
                <InputComponent
                    placeholder="Data de Nascimento"
                    value={birth}
                    onChangeText={setBirth}
                    keyboardType="name-phone-pad"
                    autoCapitalize="none"
                />


                <View style={styleConfigScreen.sexContainer}>

                    <View style={styleConfigScreen.checkboxContainer}>
                        <CheckBox selected={sex} value="Masculino" onPress={setSex} />
                        <CheckBox selected={sex} value="Feminino" onPress={setSex} />
                    </View>
                </View>
                <InputComponent
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <InputComponent
                    placeholder="Telefone"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                />

                <InputComponent
                    placeholder="Descrição"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="default"
                    autoCapitalize="none"
                    style={{ height: 100 }}
                />

            </View>
            <View>
                <ButtonComponent buttonStyle={styleConfigScreen.buttonSave}  title="Salvar" />
            </View>
        </View>
    );
};

export default ConfigScreen;
