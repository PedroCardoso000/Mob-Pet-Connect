import SmallText from '@/src/components/SmallText';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { userScreenStyles } from './user-profile-style';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/src/context/AuthContext';
import { getToken } from '@/src/service/tokenService';
import { api } from '@/src/api/axios';
import { HttpStatusCode } from 'axios';
import ButtonComponent from '@/src/components/ButtonConnect';







const UserProfileScreen = () => {
  const { user } = useContext(AuthContext);


  console.log(user);
  

  const profileData = {
    username: user?.name,
    profilePic: require("../../../assets/iconAnonimus.png"),
    posts: 120,
    followers: 3400,
    following: 300,
    bio: user?.phone,
    description:
      `
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
    }),
  };

  console.log(user);
  


  return (
    <View style={userScreenStyles.container}>
      {/* ✅ HEADER */}
      <View style={userScreenStyles.header}>
        <Image source={profileData.profilePic} style={userScreenStyles.profilePic} />
        <View style={userScreenStyles.userInfo}>
          <Text style={userScreenStyles.username}>{profileData.username}</Text>
          <View style={userScreenStyles.formrow}>
            <View style={userScreenStyles.statusUser}>
            </View>
            <SmallText>Disponivel</SmallText>
          </View>
        </View>

      </View>


      <View style={userScreenStyles.textContainer}>
        <Text style={userScreenStyles.bio}>{profileData.bio}</Text>
        <SmallText>{profileData.description}</SmallText>
      </View>

      <View style={userScreenStyles.statsRow}>

        <View style={userScreenStyles.statButton}>
          <SmallText>Adicionar mais Pets</SmallText>
          <TouchableOpacity style={userScreenStyles.editButton}>
            <Image
              source={require('../../../assets/addPet.png')}
              style={{ width: 20, height: 20, borderColor: 'none' }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        numColumns={3}
        data={profileData.feed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={userScreenStyles.feedItem}>
            <Image source={item.image} style={userScreenStyles.feedImage} />
            <SmallText>Nome: {item.name}</SmallText>
            <SmallText>Sexo: {item.sex}</SmallText>
          </View>
        )}
        style={userScreenStyles.feed}
      />
      {/* <ButtonComponent title="Entrar" onPress={() => getUserByPk(token)} /> */}
    </View>
  )
};

export default UserProfileScreen;


