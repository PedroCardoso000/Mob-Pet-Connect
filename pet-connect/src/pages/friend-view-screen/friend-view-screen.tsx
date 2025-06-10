import React, { useEffect } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { stylesFriend } from "./friend-view-screen-style";
import { User } from "@/src/@types/User";
import { Pet } from "@/src/@types/Pet";
import { useRoute } from "@react-navigation/native";
import { useImage } from "@/src/hooks/useImage";

export default function FriendViewScreen() {
    const route = useRoute();
    const { user } = route.params as { user: User };

    return (
        <SafeAreaView style={stylesFriend.container}>
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
                        <Text style={stylesFriend.profileName}>{user?.name}</Text>
                    </View>
                </View>

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

                <View style={stylesFriend.petsSection}>
                    <View style={stylesFriend.petsSectionHeader}>
                        <Text style={stylesFriend.petsSectionTitle}>PETS</Text>
                        <Image
                            source={require('../../../assets/paw-print.png')}
                            style={stylesFriend.iconImage}
                        />
                    </View>

                    <View style={stylesFriend.petsContainer}>
                        {user?.pets?.length
                            ? user.pets.map((x: Pet) => (
                                <PetView pet={x}/>
                            ))
                            : <Text style={stylesFriend.petInfo}>Sem Pets</Text>
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function PetView({ pet }: {pet: Pet}) {

    const { imageUri } = useImage(pet.image)

    return (
        <View style={stylesFriend.petCard} key={pet.id ?? Math.random()}>
            <Image
                source={imageUri ? {uri: imageUri} : require('../../../assets/dog.jpg')}
                style={stylesFriend.petImage}
            />
            <View style={stylesFriend.petInfo}>
                <Text style={stylesFriend.petInfoLabel}>
                    Nome: <Text style={stylesFriend.petInfoValue}>{pet.name}</Text>
                </Text>
                <Text style={stylesFriend.petInfoLabel}>
                    Raça: <Text style={stylesFriend.petInfoValue}>{pet.race}</Text>
                </Text>
            </View>
        </View>
    )
}