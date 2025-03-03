import "@/global.css";
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./src/pages/login/login";
import { PetList } from "./src/pages/Menu/PetList";
import React from "react";

export default function App() {
  return (
    <PetList />
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
