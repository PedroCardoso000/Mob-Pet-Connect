import React from "react";
import "@/global.css";
import LoginScreen from "./src/pages/login/login";
import Menu from "./src/pages/menu/index";
import { AuthProvider } from "./src/context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"; // 👈 IMPORTANTE
import UserProfileScreen from "../pet-connect/src/pages/user-screen/userProfileScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RegisterScreen from "./src/pages/register/register";
import { Chat } from "./src/pages/Chat";
import { PetProfile } from "./src/pages/PetProfile";
import ContactList from "./src/pages/contactList/contactList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthProvider>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Profile" component={UserProfileScreen} />
            <Stack.Screen name="Home" component={Menu} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />

            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="ContactList" component={ContactList} />
            <Stack.Screen name="PetProfile" component={PetProfile} />
          </Stack.Navigator>
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
