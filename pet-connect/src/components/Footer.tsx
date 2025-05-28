import { View, Text, StyleSheet, Pressable } from "react-native"
import Foundation from "@expo/vector-icons/Foundation"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useContext, useState } from "react";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { NavigationProps } from "../navigator/navigator-simple-app";
import { PagesNavigator } from "../navigator/pages-navigator";
import { AuthContext } from "../context/AuthContext";

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
    zIndex: 1000,
  },
  itemView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  itemContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
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
    height: 3,
    width: 40,
    backgroundColor: "black",
    borderRadius: 1.5,
    marginTop: 4,
  },
});

export function Footer() {
  const navigation = useNavigation<NavigationProps>();
  const routeName = useNavigationState((state) => {
    if (!state || !state.routes || state.index == null) return null;
    return state.routes[state.index]?.name;
  });

  const { user } = useContext(AuthContext);

  const handlePress = (page: PagesNavigator) => {
    navigation.navigate(page as any);
  };


  if (!user) {
    return <></>
  }

  return (
    <View style={styles.footerContainer}>
      <Pressable
        style={styles.itemView}
        onPress={() => handlePress(PagesNavigator.Menu)}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      >
        <View style={styles.itemContent}>
          <View style={styles.iconContainer}>
            <Foundation name="home" size={24} color="black" />
          </View>
          <Text style={styles.itemText}>Home</Text>
          {routeName === 'Home' && <View style={styles.selectedIndicator} />}
        </View>
      </Pressable>

      <Pressable
        style={styles.itemView}
        onPress={() => handlePress(PagesNavigator.UserProfile)}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      >
        <View style={styles.itemContent}>
          <View style={styles.iconContainer}>
            <FontAwesome name="user" size={24} color="black" />
          </View>
          <Text style={styles.itemText}>Perfil</Text>
          {routeName === 'UserProfile' && <View style={styles.selectedIndicator} />}
        </View>
      </Pressable>

      <Pressable
        style={styles.itemView}
        onPress={() => handlePress(PagesNavigator.CreatePet)}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      >
        <View style={styles.itemContent}>
          <View style={styles.iconContainer}>
            <Ionicons name="add-circle" size={24} color="black" />
          </View>
          <Text style={styles.itemText}>Pet</Text>
          {routeName === 'PetProfile' && <View style={styles.selectedIndicator} />}
        </View>
      </Pressable>

      <Pressable
        style={styles.itemView}
        onPress={() => handlePress(PagesNavigator.ContactList)}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      >
        <View style={styles.itemContent}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="message" size={24} color="black" />
          </View>
          <Text style={styles.itemText}>Chat</Text>
          {routeName === 'ContactList' && <View style={styles.selectedIndicator} />}
        </View>
      </Pressable>

      <Pressable
        style={styles.itemView}
        onPress={() => { }}
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      >
        <View style={styles.itemContent}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="settings" size={24} color="black" />
          </View>
          <Text style={styles.itemText}>Opções</Text>
          {/* {selectedTab === 'Settings' && <View style={styles.selectedIndicator} />} */}
        </View>
      </Pressable>
    </View>
  );
}