import React from 'react'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { userScreenStyles } from './UserScreen';
import SmallText from '../../components/SmallText';
const profileData = {
    username: "Kaique Santos",
    profilePic: require("../../../assets/favicon.png"), 
    posts: 120,
    followers: 3400,
    following: 300,
    bio: "Desenvolvedor | Apaixonado por React Native 🚀",
    feed: [
      { id: "1", image: require("../../../assets/dog.jpg") },
      { id: "2", image: require("../../../assets/dog.jpg") },
      { id: "3", image: require("../../../assets/dog.jpg") },
      { id: "4", image: require("../../../assets/dog.jpg") },
      { id: "5", image: require("../../../assets/dog.jpg") },
      { id: "6", image: require("../../../assets/dog.jpg") },
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
          </View>
        </View>
  
  
        {/* ✅ BIO */}
        <Text style={userScreenStyles.bio}>{profileData.bio}</Text>


        <Text style={userScreenStyles.bio}>{profileData.bio}</Text>
  
  
        {/* ✅ FEED EM GRADE */}
        <FlatList
          numColumns={3}
          data={profileData.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={item.image} style={userScreenStyles.feedImage} />
          )}
          style={userScreenStyles.feed}
        />
      </View>
    )
};

export default UserProfileScreen;


