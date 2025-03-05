import "@/global.css";
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./src/pages/login/login";
import React from "react";
import  RegisterScreen  from "./src/pages/register/register";
import  UserScreen  from "./src/pages/user-screen/UserScreen";

export default function App() {
  return (
    <UserScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
