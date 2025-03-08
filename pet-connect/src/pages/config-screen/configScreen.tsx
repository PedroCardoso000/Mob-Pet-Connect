import { View, Text, Image } from "react-native";
import styleConfigScreen from "./configScreen-style";
import InputComponent from "@/src/components/InputConnect";
import { useState } from "react";


const ConfigScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
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
                        placeholder="Nome"
                        value={name}
                        icon={require("@/assets/password.png")}
                        onChangeText={setName}
                        keyboardType="name-phone-pad"
                        autoCapitalize="none"
                    />
                    <InputComponent
                        placeholder="Email"
                        value={email}
                        icon={require("@/assets/password.png")}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
            </View>
        </>
    )
};

export default ConfigScreen;