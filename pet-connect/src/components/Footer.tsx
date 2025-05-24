import { View, Text, StyleSheet, Pressable } from "react-native"
import Foundation from "@expo/vector-icons/Foundation"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../navigator/navigator-simple-app";

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    height: 60,
  },
  itemView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  itemText: {
    fontSize: 12,
    marginTop: 2,
    color: "black",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  selectedIndicator: {
    position: "absolute",
    bottom: 0,
    height: 3,
    width: "100%",
    backgroundColor: "black",
  },
});

export function Footer() {
   const navigation = useNavigation<NavigationProps>();
  const [selectedTab, setSelectedTab] = useState('Pet');

  const handlePress = (page: string) => {
    setSelectedTab(page);
    navigation.replace(page as any);
  };

  return (
    <View style={styles.footerContainer}>
      <Pressable 
        style={styles.itemView}
        onPress={() => {}}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      >
        <View style={styles.iconContainer}>
          <Foundation name="home" size={24} color="black"/>
        </View>
        <Text style={styles.itemText}>Home</Text>
        {selectedTab === 'Home' && <View style={styles.selectedIndicator} />}
      </Pressable>
      
      <Pressable 
        style={styles.itemView}
        onPress={() => {}}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      >
        <View style={styles.iconContainer}>
          <FontAwesome name="user" size={24} color="black"/>
        </View>
        <Text style={styles.itemText}>Perfil</Text>
        {selectedTab === 'UserProfile' && <View style={styles.selectedIndicator} />}
      </Pressable>
      
      <Pressable 
        style={styles.itemView}
        onPress={() => {}}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="add-circle" size={24} color="black"/>
        </View>
        <Text style={styles.itemText}>Pet</Text>
        {selectedTab === 'PetProfile' && <View style={styles.selectedIndicator} />}
      </Pressable>
      
      <Pressable 
        style={styles.itemView}
        onPress={() => handlePress(selectedTab)}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      >
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="message" size={24} color="black"/>
        </View>
        <Text style={styles.itemText}>Chat</Text>
        {selectedTab === 'Chat' && <View style={styles.selectedIndicator} />}
      </Pressable>
      
      <Pressable 
        style={styles.itemView}
        onPress={() => {}}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      >
        <View style={styles.iconContainer}>
          <MaterialIcons name="settings" size={24} color="black"/>
        </View>
        <Text style={styles.itemText}>Opções</Text>
        {selectedTab === 'Chat' && <View style={styles.selectedIndicator} />}
      </Pressable>
    </View>
  );
}