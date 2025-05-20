import React from "react";
import "@/global.css";
import LoginScreen from "./src/pages/login/login";
import Menu from "./src/pages/menu/index";
import { AuthProvider } from "./src/context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"; // 👈 IMPORTANTE
import UserProfileScreen from "../pet-connect/src/pages/user-screen/userProfileScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
        </Stack.Navigator>
      </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
