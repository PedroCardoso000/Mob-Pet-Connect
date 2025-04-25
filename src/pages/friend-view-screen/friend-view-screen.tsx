import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { stylesFriend } from "./friend-view-screen-style";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";

export default function FriendViewScreen() {
    return (
        <SafeAreaView style={stylesFriend.container}>
            <Header/>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={stylesFriend.header}>
                <Image
                    source={require("@/assets/icone.png")}
                    style={stylesFriend.iconImage}
                />
            </View>

            <ScrollView 
                style={stylesFriend.scrollView}
                contentContainerStyle={stylesFriend.scrollViewContent}
            >
                <View style={stylesFriend.profileHeader}>
                    <View style={stylesFriend.profileInfo}>
                        <Text style={stylesFriend.profileName}>Leandro Júnior</Text>
                        <Text style={stylesFriend.profileLocation}>Fortaleza - CE</Text>
                    </View>
                </View>

                {/* Perfil do Usuário */}
                <View style={stylesFriend.objectivesSection}>
                    <Text style={stylesFriend.sectionTitle}>Objetivo:</Text>
                    <View style={stylesFriend.bulletPoints}>
                        <Text style={stylesFriend.bulletPoint}>
                            • Encontrar um parceiro para reprodução para dois cães, Bob e Luna.
                        </Text>
                        <Text style={stylesFriend.bulletPoint}>• Analisar se existem pessoas com filhotes disponíveis.</Text>
                        <Text style={stylesFriend.bulletPoint}>
                            • Conversar se com outros donos de cães apaixonados por dedicação ao ar livre.
                        </Text>
                        <Text style={stylesFriend.bulletPoint}>• Passear com Bob e Luna em trilhas e campos.</Text>
                        <Text style={stylesFriend.bulletPoint}>• Trocar receitas com seus cães, como comida, nutrição e água.</Text>
                        <Text style={stylesFriend.bulletPoint}>• Participar de competições de cães e compartilhar dicas.</Text>
                        <Text style={stylesFriend.bulletPoint}>
                            • Compartilhar fotos e vídeos de seus animais de estimação nas redes sociais.
                        </Text>
                    </View>
                </View>

                {/* Seção Pet */}
                <View style={stylesFriend.petsSection}>
                    <View style={stylesFriend.petsSectionHeader}>
                        <Text style={stylesFriend.petsSectionTitle}>PETS</Text>
                        <Image
                            source={require('../../../assets/paw-print.png')}
                            style={stylesFriend.iconImage}
                        />
                    </View>

                    <View style={stylesFriend.petsContainer}>
                        {/* Pet 1 */}
                        <View style={stylesFriend.petCard}>
                            <Image
                                source={require('../../../assets/dog.jpg')}
                                style={stylesFriend.petImage}
                            />
                            <View style={stylesFriend.petInfo}>
                                <Text style={stylesFriend.petInfoLabel}>
                                    Nome: <Text style={stylesFriend.petInfoValue}>Toto</Text>
                                </Text>
                                <Text style={stylesFriend.petInfoLabel}>
                                    Sexo: <Text style={stylesFriend.petInfoValue}>M</Text>
                                </Text>
                                <Text style={stylesFriend.petInfoLabel}>
                                    Raça: <Text style={stylesFriend.petInfoValue}>Labrador</Text>
                                </Text>
                            </View>
                        </View>

                        {/* Pet 2 */}
                        <View style={stylesFriend.petCard}>
                            <Image
                                source={require('../../../assets/dog.jpg')}
                                style={stylesFriend.petImage}
                            />
                            <View style={stylesFriend.petInfo}>
                                <Text style={stylesFriend.petInfoLabel}>
                                    Nome: <Text style={stylesFriend.petInfoValue}>Bud</Text>
                                </Text>
                                <Text style={stylesFriend.petInfoLabel}>
                                    Sexo: <Text style={stylesFriend.petInfoValue}>M</Text>
                                </Text>
                                <Text style={stylesFriend.petInfoLabel}>
                                    Raça: <Text style={stylesFriend.petInfoValue}>Golden</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}