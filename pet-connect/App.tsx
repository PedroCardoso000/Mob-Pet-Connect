import React from "react";
import "@/global.css";
import LoginScreen from "./src/pages/login/login";
import Menu from "./src/pages/menu/index";
import { AuthProvider } from "./src/context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"; // 👈 IMPORTANTE

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> {/* 👈 ENVOLVE TUDO */}
      <AuthProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={Menu} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
