import { View, Text, StyleSheet, Pressable } from "react-native"
import Foundation from "@expo/vector-icons/Foundation"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { navigate, RootStackParamList } from "../navigator/app_navigator";
import { useState } from "react";

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 8,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  itemView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  itemPressed: {
    opacity: 0.7,
  },
  itemText: {
    fontSize: 12,
    marginTop: 4,
    color: 'black',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIndicator: {
    position: 'absolute',
    bottom: -15,
    height: 3,
    width: '100%',
    backgroundColor: 'black',
  }
});

export function Footer() {
  const [selectedTab, setSelectedTab] = useState('Pet');

  const handlePress = (screen: keyof RootStackParamList) => {
    setSelectedTab(screen);
    navigate(screen);
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
        {selectedTab === 'Profile' && <View style={styles.selectedIndicator} />}
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
        {selectedTab === 'Pet' && <View style={styles.selectedIndicator} />}
      </Pressable>
      
      <Pressable 
        style={styles.itemView}
        onPress={() => handlePress('Chat')}
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
        {selectedTab === 'Settings' && <View style={styles.selectedIndicator} />}
      </Pressable>
    </View>
  );
}