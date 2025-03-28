import SmallText from '@/src/components/SmallText';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { userScreenStyles } from './user-profile-style';
const profileData = {
  username: "Kaique Santos",
  profilePic: require("../../../assets/user.png"),
  posts: 120,
  followers: 3400,
  following: 300,
  bio: "Obejtivos:",
  description:
    `
  Encontrar um parceiro para reprodução para seus cães.
  Ampliar sua família peluda com filhotes saudáveis e ativos.
  Conectar-se com outros donos de cães apaixonados por atividades ao ar livre.
  `,
  feed: [
    { id: "1", image: require("../../../assets/dog.jpg"), name: "Rex", sex: "Macho", breed: "Vira-lata" },
    { id: "2", image: require("../../../assets/dog.jpg"), name: "Alex", sex: "Femea", breed: "Vira-lata" },
    { id: "3", image: require("../../../assets/dog.jpg"), name: "Rennie", sex: "Macho", breed: "Vira-lata" },
    { id: "4", image: require("../../../assets/dog.jpg"), name: "Roy", sex: "Femea", breed: "Vira-lata" },
  ],
};

const UserProfileScreen = () => {
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

      {/* ✅ STATS */}
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

    </View>
  )
};

export default UserProfileScreen;


