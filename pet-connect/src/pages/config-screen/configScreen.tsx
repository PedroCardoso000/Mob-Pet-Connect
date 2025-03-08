import { View, Text, Image, TouchableOpacity } from "react-native";
import styleConfigScreen from "./configScreen-style";
import InputComponent from "@/src/components/InputConnect";
import React, { useState } from "react";

const ConfigScreen = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [birth, setBirth] = useState<string | undefined>();
    const [phone, setPhone] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [sex, setSex] = useState<string>(''); // Estado para armazenar "Masculino" ou "Feminino"

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
                    icon={require("@/assets/password.png")}
                    onChangeText={setBirth}
                    keyboardType="name-phone-pad"
                    autoCapitalize="none"
                />


                <View style={styleConfigScreen.sexContainer}>
                    <Text style={styleConfigScreen.sexLabel}>Sexo</Text>

                    <View style={styleConfigScreen.checkboxContainer}>
                        {/* Opção Masculino */}
                        <TouchableOpacity
                            onPress={() => setSex("Masculino")}
                            style={styleConfigScreen.checkboxOption}
                        >
                            <View style={[styleConfigScreen.checkbox, sex === "Masculino" && styleConfigScreen.checkboxSelected]}>
                                {sex === "Masculino" && <View style={styleConfigScreen.checkboxInner} />}
                            </View>
                            <Text>Masculino</Text>
                        </TouchableOpacity>

                        {/* Opção Feminino */}
                        <TouchableOpacity
                            onPress={() => setSex("Feminino")}
                            style={styleConfigScreen.checkboxOption}
                        >
                            <View style={[styleConfigScreen.checkbox, sex === "Feminino" && styleConfigScreen.checkboxSelected]}>
                                {sex === "Feminino" && <View style={styleConfigScreen.checkboxInner} />}
                            </View>
                            <Text>Feminino</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <InputComponent
                    placeholder="Email"
                    value={email}
                    icon={require("@/assets/password.png")}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <InputComponent
                    placeholder="Telefone"
                    value={phone}
                    icon={require("@/assets/password.png")}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                />

                {/* Criar Compoente */}
                <InputComponent
                    placeholder="Telefone"
                    value={phone}
                    icon={require("@/assets/password.png")}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    style={{ height: 100 }}
                />

            </View>
        </View>
    );
};

export default ConfigScreen;
