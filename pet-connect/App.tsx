import "@/global.css";
import React from "react";
import LoginScreen from "./src/pages/login/login";
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>

      <NavigationContainer>
        <LoginScreen />
        <Toast />
      </NavigationContainer>
    </>
  );
}

