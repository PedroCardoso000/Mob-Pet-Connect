import "@/global.css";
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./src/pages/login/login";
import React from "react";
import  RegisterScreen  from "./src/pages/register/register";
import UserProfileScreen from "./src/pages/user-screen/userProfileScreen";

export default function App() {
  return (
    <UserProfileScreen/>
  );
}

