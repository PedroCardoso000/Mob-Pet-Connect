import SmallText from '@/src/components/SmallText';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { userScreenStyles } from './user-profile-style';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/src/context/AuthContext';
import { getToken } from '@/src/service/tokenService';
import { api } from '@/src/api/axios';
import { HttpStatusCode } from 'axios';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/src/navigator/navigator-simple-app';
import Loading from '@/src/components/Loading';







const UserProfileScreen = () => {
  const { user, getUserByToken } = useContext(AuthContext);
  const navigation = useNavigation<NavigationProps>();
  const [loading, setLoading] = useState(false);

  let profileData = {
    username: user?.name,
    profilePic: require("../../../assets/iconAnonimus.png"),
    posts: 120,
    followers: 3400,
    following: 300,
    bio: user?.phone,
    description: `
  Encontrar um parceiro para reprodução para seus cães.
  Ampliar sua família peluda com filhotes saudáveis e ativos.
  Conectar-se com outros donos de cães apaixonados por atividades ao ar livre.
  `,
    feed: user?.pets.map((p: any) => {
      return {
        id: p?.id,
        name: p?.name,
        sex: p?.race,
        image: p?.image ? { uri: p?.image } : require("../../../assets/dog.jpg"),
      };
    }) || [],
  };

  async function reloadPets() {
    try {
      setLoading(true);

      const userPetByToken: any = await getUserByToken();

      if (userPetByToken?.pets !== null) {
        profileData.feed = userPetByToken?.pets.map((p: any) => {
          return {
            id: p?.id,
            name: p?.name,
            sex: p?.race,
            image: p?.image ? { uri: p?.image } : require("../../../assets/dog.jpg"),
          };
        });
      }

    } catch (error) {
      console.error("Erro ao recarregar os pets:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loading />;


  return (
    <View style={userScreenStyles.container}>
      <ScrollView contentContainerStyle={userScreenStyles.scrollContainer}>
        <View style={userScreenStyles.header}>
          <Image source={profileData.profilePic} style={userScreenStyles.profilePic} />
          <View style={userScreenStyles.userInfo}>
            <Text style={userScreenStyles.username}>{profileData.username}</Text>
            <View style={userScreenStyles.formrow}>
              <View style={userScreenStyles.statusUser} />
              <SmallText>Disponível</SmallText>
            </View>
          </View>
        </View>

        <View style={userScreenStyles.textContainer}>
          <SmallText>{profileData.description}</SmallText>
        </View>

        <View style={userScreenStyles.divider} />

        <View style={userScreenStyles.statsRow}>
          <View style={userScreenStyles.statButton}>
            <SmallText>Adicionar mais Pets</SmallText>
            <TouchableOpacity
              style={userScreenStyles.editButton}
              onPress={() => navigation.navigate("CreatePet")}
            >
              <Image
                source={require("../../../assets/botao-adicionar.png")}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View style={userScreenStyles.statButton}>
            <SmallText>Atualizar</SmallText>
            <TouchableOpacity
              style={userScreenStyles.editButton}
              onPress={reloadPets}
            >
              <Image
                source={require("../../../assets/recarregar.png")}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={userScreenStyles.divider} />

        <Text style={userScreenStyles.sectionTitle}>Meus Pets</Text>

        <View style={userScreenStyles.feedContainer}>
          {profileData.feed.map((pet: any) => (
            <View key={pet.id} style={userScreenStyles.feedItem}>
              <Image source={pet.image} style={userScreenStyles.feedImage} />
              <SmallText style={userScreenStyles.feedText}>Nome: {pet.name}</SmallText>
              <SmallText style={userScreenStyles.feedText}>Raça: {pet.sex}</SmallText>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};


export default UserProfileScreen;


