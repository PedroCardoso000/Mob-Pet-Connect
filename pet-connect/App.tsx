import "@/global.css";
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./src/pages/login/login";
import React from "react";
import UserProfileScreen from "./src/pages/user-screen/userProfileScreen";
import  ConfigScreen  from "./src/pages/config-screen/configScreen";
import {ContactList} from "./src/pages/contactList/index";

export default function App() {
  return (
    <ContactList />
  );
}

